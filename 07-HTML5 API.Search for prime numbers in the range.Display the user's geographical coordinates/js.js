var statusDisplay;
var worker;
var searchButton;

window.onload = function() {
    statusDisplay = document.getElementById("status");
    searchButton = document.getElementById("searchButton");
};

function doSearch() {
    searchButton.disabled = true;

    var fromNumber = document.getElementById("from").value;
    var toNumber = document.getElementById("to").value;
    var blob = new Blob([document.querySelector('#FindPrimes').textContent]);
    blobURL = window.URL.createObjectURL(blob);

    worker = new Worker(blobURL);
    worker.onmessage = receivedWorkerMessage;
    worker.onerror = workerError;

    worker.postMessage(
        { from: fromNumber,
            to: toNumber
        }
    );

    statusDisplay.innerHTML = "Веб воркер в рабоат от ("+
        fromNumber + " до " + toNumber + ") ...";
}

function receivedWorkerMessage(event) {
    var message = event.data;

    if (message.type === "PrimeList") {
        var primes = message.data;
        var primeList = "";
        for (var i=0; i<primes.length; i++) {
            primeList += primes[i];
            if (i !== primes.length-1) primeList += ", ";
        }
        var displayList = document.getElementById("primeContainer");
        displayList.innerHTML = primeList;

        if (primeList.length === 0) {
            statusDisplay.innerHTML = "Не найдено ни одного результата.";
        }
        else {
            statusDisplay.innerHTML = "Результаты здесь!";
        }
        searchButton.disabled = false;
    }
    else if (message.type === "Progress") {
        statusDisplay.innerHTML = message.data + "% выполнено ...";
    }
}

function workerError(error) {
    statusDisplay.innerHTML = error.message;
}

function cancelSearch() {
    worker.terminate();
    worker = null;
    statusDisplay.innerHTML = "Поиск отменён.";
    searchButton.disabled = false;
}
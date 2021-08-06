function isInteger(num) {
    if (num % 1) {
        return (false);
    }
    return (true);
}

function findPrimes(a, b) {
    for (var n = a; n <= b; n++) {

        if (n > 7 && (n % 3 === 0 || n % 5 === 0 || n % 7 === 0 || n % 2 === 0)) {    }
        else if (n < 2 || n === 4 || n === 6) {    }
        else
            console.log(n);
    }
}
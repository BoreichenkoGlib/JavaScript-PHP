function addClass(object, cls) {
    if (object.className.indexOf(cls) === -1) {
        object.className.length > 0 ? object.className += " " + cls : object.className += cls;
    }
}

function camelize(string) {

    var arr = string.split('-');
    string = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        string += arr[i];
    }
    return string;
}

function removeClass(object, cls) {
    var string = object.className.split(" ");
    for (var i = 0; i < string.length; i++) {
        if (string[i] === cls) {
            string.splice(i, 1);
            i--;
        }
    }
    object.className = string.join(' ');
}

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > b || arr[i] < a) {
            arr.splice(i, 1);
            i--;
        }
    }
}

function reverseSort(arr) {
    arr.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
    });
}

function arraySort(arr) {
    var mass = arr.slice();
    mass.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    });
    return mass;
}

function randomSort(arr) {
    arr.sort(function () {
        if (Math.random() > 0.5) return 1;
        if (Math.random() < 0.5) return -1;
    });
}

function sortByAge(people) {
    people.sort(function (a, b) {
        if (a.age > b.age) return 1;
        if (a.age < b.age) return -1;
    });
}

function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

function printListRec(list) {
    console.log(list);
    if (list) {
        printListRec(list.next);
    }
}

function printReverseListRec(list) {

    if (list.next) {
        printReverseListRec(list.next);
    }
    console.log(list.value);
}

function printReverseList(list) {
    var arr = [];
    var tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function unique(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

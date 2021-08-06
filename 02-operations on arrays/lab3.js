var obj = {
    className: 'open menu'
};
addClass(obj, 'ok');
addClass(obj, 'menu');
console.log("task namba van ", obj);

var str = "-and-I-say-heey-yeah-yeah-yay";
str = camelize(str);
console.log("task 2 " + str);


var obj2 = {
    className: 'menu open menu kek'
};
removeClass(obj2, 'menu');
console.log("task 3 ", obj2);

arr = [5, 3, 8, 1, 5, 2];
filterRangeInPlace(arr, 1, 4);
console.log("task 4 " + arr);


var arr2 = [5, 8, 2, 7, -10];
reverseSort( arr2 );
console.log("task 5 " +arr2);

var arr3 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arraySort( arr3 );
console.log("task 6 " +arr3);
console.log("task 6 " +arrSorted);

var arr4 = [1, 2, 3, 4, 5];
randomSort(arr4);
console.log("task 7 " +arr4);
var jezus = { name: "Jezus", age:33 };
var daddy= { name: "Daddy", age:42 };
var mycat = { name: "MyCat", age:3 };
var people = [ jezus ,daddy  , mycat ];
sortByAge(people);
console.log("task 8 ",people);


console.log("task 9.1");
printList(list);
console.log("task 9.2");
printListRec(list);
console.log("task 9.3");
printReverseListRec(list);
console.log("task 9.4");
printReverseList(list);

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

var strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];
console.log("task 10 " +unique(strings));
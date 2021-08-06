var date = new Date();

function getDayName(date) {
    var dayName = date.toLocaleString("uk", {weekday: "long"});
    return dayName;
}

function getMonthName(date) {
    var dayName = date.toLocaleString("uk", {month: "short"});
    return dayName;
}

function generateDay() {
    var elem2 = document.getElementById("currentDay");
    var num = date.getDay() < 1 ? 7 : date.getDay();
    elem2.innerHTML = "Number of the Day: " + num + "<br/>" + "Name of the Day: " + getDayName(date);
}

function generateDate() {
    var elem1 = document.getElementById("currentDate");
    var result = "Current Date: " + date.getDate() + " " + getMonthName(date) + " " + date.getFullYear() + " року" + "<br/>" +
        "Current Day of the Week: " +
        getDayName(date);
    var time = "Time: " + date.toLocaleTimeString('uk');
    result += "<br/>" + time;
    elem1.innerHTML = result;
}

function daysAgoByN() {
    var elem3 = document.getElementById("daysAgoResult");
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };
    var daysAgo = +document.getElementById("daysAgo").value;
    date.setDate(date.getDate() - daysAgo);
    elem3.innerHTML = "Результат: " + date.toLocaleString("uk", options);
}

function findLastDay() {
    var elem4 = document.getElementById("lastDayResult");
    var month = +document.getElementById("monthForLastDay").value;
    var year = +document.getElementById("yearForLastDay").value;
    var res = new Date(year, month, 0);
    elem4.innerHTML = "Результат: " + res.getDate();
}

function findSecondsHelper() {
    date = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    var day = {
        fromStart: date,
        toEnd: 86400 - date
    };
    console.log(day);
    return day;
}

function findSeconds() {
    var elem5 = document.getElementById("secsToStartEnd");
    var res = findSecondsHelper();
    elem5.innerHTML = "Результат: від початку цього - " + res.fromStart + " до початку наступного - " + res.toEnd;
}

function dateToMDY() {
    var elem6 = document.getElementById("MDYRes");
    var date = new Date(document.getElementById("dateToFormat").value);
    var day = date.getDate();
    day = (day < 10) ? '0' + day : day;
    var month = date.getMonth() + 1;
    month = (month < 10) ? '0' + month : month;
    var year = date.getFullYear() % 100;
    year = (year < 10) ? '0' + year : year;
    elem6.innerHTML = day + "." + month + "." + year;
}

function dateSubtraction() {
    var elem7 = document.getElementById("dateSubtractionResult");
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);
    if (date1.toLocaleDateString('uk') === date2.toLocaleDateString('uk')) {
        elem7.innerHTML = "0д 0м 0р";
        return;
    }
    var res, resYear,resMonth, resDate;
    if (date1 < date2) {
        var tmp = date1;
        date1 = date2;
        date2 = tmp;
    }
    resYear = (date1.getFullYear() - date2.getFullYear());
    resMonth = (date1.getMonth() - date2.getMonth());
    resDate = (date1.getDate() - date2.getDate());
    if (date1.getMonth() < date2.getMonth())
        resYear -= 1;
    res = new Date(resYear, resMonth, resDate);
    if (res.getDate() === 31 && res.getMonth() === 11) {
        elem7.innerHTML = res.getYear() + 1 + " р";
    }
    if (res.getDate() === 31 && (date1.getMonth() === 3 || date1.getMonth() === 3)){
        elem7.innerHTML = "28 д " + res.getMonth() + " м " + res.getYear() + " р";
    }
    else
        elem7.innerHTML = res.getDate() + " д " + res.getMonth() + " м " + res.getYear() + " р";
}

function compareDate() {
    var dateTime = new Date(document.getElementById("dateTime").value);
    var elem8 = document.getElementById("formatDateResult");
    elem8.innerHTML = formatDate(dateTime);
}

function formatDate(date) {
    var res = new Date() - date;
    if (res < 1000) {
        return 'тільки що';
    }
    var n = Math.floor(res / 1000);
    if (n < 60) {
        return n + ' сек. назад';
    }
    var m = Math.floor(res / 60000);
    if (m < 60) {
        return m + ' хв. назад';
    }
    var options = {
        hour: 'numeric',
        minute: 'numeric'
    };
    return date.toLocaleDateString('uk') + " " + date.toLocaleTimeString('uk', options);
}

function formatStrDate() {
    var dateStr = document.getElementById("dateStr").value, res;
    var elem9 = document.getElementById('dateStrRes');
    var option = document.getElementById('variant').value;
    var tmp = dateStr.split(/[:. -]+/);
    console.log(tmp);
    switch (option) {
        case "1":
        case "3":
        case "5":
        case "7":
            res = new Date(tmp[1] + " " + tmp[0] + " " + tmp[2]);
            break;
        case "2":
        case "4":
        case "6":
        case "8":
            res = new Date(tmp[1] + " " + tmp[2] + " " + tmp[0]);
            break;
        default:
            elem9.innerHTML = "Error";
            return;
    }
    var opt = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    elem9.innerHTML = res.toLocaleDateString('uk',opt);
}

function localeDate() {
    var elem10 = document.getElementById("langDateRes");
    var date = new Date(document.getElementById('langDate').value);
    var lang = document.getElementById('lang').value;
    var options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    elem10.innerHTML = date.toLocaleDateString(lang, options);
}

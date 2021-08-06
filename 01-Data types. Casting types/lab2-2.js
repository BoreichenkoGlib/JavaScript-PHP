function isIPAddress(ip) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
        return (true);
    }
    return (false);
}

function isRGBA(text) {
    var rgbaRegex = /rgba\(([01]?\d\d?|2[0-4]\d|25[0-5])\,\s*?([01]?\d\d?|2[0-4]\d|25[0-5])\,\s*?([01]?\d\d?|2[0-4]\d|25[0-5])\,\s*?([1]|[0].[0-9]+)\)/g;
    return text.match(rgbaRegex) !== null ? text.match(rgbaRegex) : null;
}

function findHexColor(text){
    var hexRegex= /(#[0-9a-f]{6})|(#[0-9a-f]{3})/ig;
    return text.match(hexRegex) !== null ? text.match(hexRegex) : null;
}

function findTags(text, tag) {
    var tagRegex = new RegExp("<" + tag + ">","g");
    return text.match(tagRegex) !== null ? text.match(tagRegex) : null;
}

function findPosNum(text) {
    var posRegex = /\d+(\.\d+)?/g;
    return text.match(posRegex) !== null ? text.match(posRegex) : null;
}

function findDates(text) {
    var datesRegex = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/g;
    return text.match(datesRegex) !== null ? text.match(datesRegex) : null;
}

function validatePage1() {
    return isNotEmpty("favoriteNumber", "radio");
}

function validatePage2() {
    var result = true;
    result = isNotEmpty("favoriteNumber", "radio") && result;
    result = isNotEmpty("whatName", "text") && result;
    alert(result);
    return  result;
}
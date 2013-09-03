function validatePage1() {
    var result = true;
    var v1 = isNotEmpty('name', 'text');
    result = v1 && result;
    if (v1) {
        result = meetsLengthRequirements('name', 'text', 5, 10) && result;
    }
    var v2 = isNotEmpty('age', 'wholeNumber');
    result = v2 && result;
    if (v2) {
    }
    return result;
}

function validatePage2() {
    var result = true;
    var v1 = isNotEmpty('birthMonth', 'multipleChoice');
    result = v1 && result;
    if (v1) {
    }
    var v2 = isNotEmpty('weight', 'decimalNumber');
    result = v2 && result;
    if (v2) {
    }
    return result;
}


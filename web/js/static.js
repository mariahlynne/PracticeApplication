$(document).ready(function() {
    onlyAllowNumbers();
    onlyAllowDecimalNumbers();
});

function hideErrorMessage(id) {
    $("#" + id + "ErrorMessage").hide();
}

function displayErrorMessage(id, message) {
    $("#" + id + "ErrorMessage").text(message);
    $("#" + id + "ErrorMessage").show();
}

function isNotEmpty(id, type) {
    var value = getValueByTypeAndID(id, type);
    hideErrorMessage(id);
    if (value == null || value == "") {
        displayErrorMessage(id, "* This question is required");
        return false;
    }
    return true;
}

function getValueByTypeAndID(id, type) {
    var value = "";
    switch (type) {
        case "radio":
            value = $('input[name=' + id + ']:checked').val();
            break;
        case "textarea":
            value = $("#" + id).text();
            break;
        default:
            value = $("#" + id).val();
            break;
    }
    return value;
}

function meetsLengthRequirements(id, type, min, max) {
    var value = getValueByTypeAndID(id, type);
    hideErrorMessage(id);
    if (value.length < min) {
        displayErrorMessage(id, "* must be at least " + min + " characters");
        return false;
    } else if (value.length > max) {
        displayErrorMessage(id, "* cannot be more than " + max + " characters");
        return false;
    }
    return true;
}

function meetsWholeNumberRequirements(id, min, max) {
    var val = getValueByTypeAndID(id, "wholeNumber");
    val = parseInt(val);
    hideErrorMessage(id);
    if (isNaN(val)) {
        displayErrorMessage(id, "* must be a whole number");
        return false;
    } else if (min != "") {
        if (val < min) {
            displayErrorMessage(id, "* must be at least " + min);
            return false;
        }
    } else if (max != "") {
        if (val > max) {
            displayErrorMessage(id, "* cannot be more than " + max);
            return false;
        }
    }
    return true;
}

function meetsDecimalNumberRequirements(id, min, max) {
    var val = getValueByTypeAndID(id, "decimalNumber");
    val = parseFloat(val);
    hideErrorMessage(id);
    if (isNaN(val)) {
        displayErrorMessage(id, "* must be a number");
        return false;
    } else if (min != "") {
        if (val < min) {
            displayErrorMessage(id, "* must be at least " + min);
            return false;
        }
    } else if (max != "") {
        if (val > max) {
            displayErrorMessage(id, "* cannot be more than " + max);
            return false;
        }
    }
    return true;
}

function padDecimalPointPlaces(id, places) {
    var padded = parseFloat($("#" + id).val());
    if (!isNaN(padded)) {
        $("#" + id).val(padded.toFixed(places));
    } else {
        $("#" + id).val("");
    }
}

function onlyAllowNumbers() {
    $(".onlyAllowNumbers").keydown(function (event) {
        // Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: Ctrl+C
            (event.keyCode == 67 && event.ctrlKey === true) ||
            // Allow: Ctrl+V
            (event.keyCode == 86 && event.ctrlKey === true) ||
            // Allow: Ctrl+X
            (event.keyCode == 88 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}

function onlyAllowDecimalNumbers() {
    $(".onlyAllowDecimalNumbers").keydown(function (event) {
        // Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: Ctrl+C
            (event.keyCode == 67 && event.ctrlKey === true) ||
            // Allow: Ctrl+V
            (event.keyCode == 86 && event.ctrlKey === true) ||
            // Allow: Ctrl+X
            (event.keyCode == 88 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39) ||
            // Allow: decimal point
            (event.KeyCode == 110)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}
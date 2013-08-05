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
    debugger;
    var value;
    switch (type) {
        case "radio":
            value = $('input[name=' + id + ']:checked').val();
            break
        default:
            value = $("#" + id).val();
            break;
    }
    hideErrorMessage(id);
    if (value == "" || value == null) {
        displayErrorMessage(id, "* This question is required");
        return false;
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

function meetsLengthRequirements(value, min, max) {
    if (value.length < min) {
        return " must be at least " + min + " characters";
    } else if (value.length > max) {
        return " cannot be more than " + max + " characters";
    }
    return "";
}

function meetsWholeNumberRequirements(value, min, max) {
    var val = parseInt(value);
    if (isNaN(val)) {
        return " must be a whole number";
    } else if (val < min) {
        return " must be at least " + min;
    } else if (val > max) {
        return " cannot be more than " + max;
    }
    return "";
}

function meetsDecimalNumberRequirements(value, min, max) {
    var val = parseFloat(value);
    if (isNaN(val)) {
        return " must be a number";
    } else if (val < min) {
        return " must be at least " + min;
    } else if (val > max) {
        return " cannot be more than " + max;
    }
    return "";
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
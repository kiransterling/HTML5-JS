function browserinputcheck() {
    var inputelem = document.getElementById("email");
    if (inputelem.type == "text") {
        alert("The browser does not support HTML5 input type email validation - assumes plain text");
    }
}

function allfieldscompleted(theForm) {
    if ((theForm.email.value != "") &&
        (theForm.city.value != "") &&
        (theForm.region.value != "") &&
        (theForm.country.value != "")) {
        // all other fields have been marked as not required
        alert("Thank you - Your profile has been submitted!");
    }
}
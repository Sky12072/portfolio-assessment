document.getElementById("myForm").onsubmit = function () {
    let isValidName = validateName(); //store the return value to the variable 'isValidName'    
    let isValidEmail = validateEmail();
    let isValidPhone = validatePhone();
    let isValidMessage = validateMessage();

    return isValidName && (isValidEmail || isValidPhone) && isValidMessage;
}




function validateName() {
    let x = document.getElementById("txtName").value;
    //valid condition - contain at least one lowercase char and one uppercase char
    if (/[a-z]/.test(x) && /[A-Z]/.test(x)) {
        document.getElementById("txtName_Help").innerText = "";
        return true;
    }

    else {                      //invalid condition
        document.getElementById("txtName_Help").innerText =
            "Name must contain at least two letters (lowercase and uppercase)";
        return false;
    }
}



function validateEmail() {
    let x = document.getElementById("txtEmail").value;

    //invalid condition 
    if (x === "") {
        document.getElementById("txtEmail_Help").innerText =
            "Email must contain a valid email format";
        return false;
    }

    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x) == false) {
        document.getElementById("txtEmail_Help").innerText =
            "Email must contain a valid email format";
        return false;
    }

    else {                      //valid condition
        document.getElementById("txtEmail_Help").innerText = "";
        return true;
    }
}

function validatePhone() {
    let x = document.getElementById("txtPhone").value;
    if (x === "" || isNaN(x)) {
        document.getElementById("txtPhone_Help").innerText =
            "Phone must contain digits only";
        return false;
    }

    else {
        document.getElementById("txtPhone_Help").innerText = "";
        return true;
    }
}

function validateMessage() {
    let x = document.getElementById("messagebox").value;
    if (x === "") {
        document.getElementById("txtMessage_Help").innerText =
            "Message field cannot be empty"
        return false;
    }

    else {
        document.getElementById("txtMessage_Help").innerText = "";
        return true;
    }
}

//document.getElementById("myForm").onsubmit = function () {

//    if (isValidName == true && isValidEmail == true && isValidMessage == true) {
//            return true;
//    }
//    else if (isValidName == true && isValidPhone == true && isValidMessage == true) {
//            return true;
//    }
//    else if (isValidName == truel && isValidEmail == true && isValidPhone == true && isValidMessage == true) {
//            return true;
//    }

//    else {
//        return false;
//    }


//}
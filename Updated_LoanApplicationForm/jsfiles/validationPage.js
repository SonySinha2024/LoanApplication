var submitButton = document.getElementById('submitBtn');
submitButton.disabled = true; 
var fullname;
var email;
var fullNamevalidationflag = false;
var emailvalidationflag = false;
var panvalidationflag = false;
var loanamountvalidationflag = false;
function OnSubmit() {
    var errors = 0;
    const fullname = document.getElementById('fullname').value;
    if (fullname.length == 0) {
        alert('Full name cannot be empty');
        document.getElementById('submitBtn').disabled = true;
        errors++;
    }
    email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('Email cannot be empty');
        document.getElementById('submitBtn').disabled = true;
        errors++;
    }
    const pan = document.getElementById('pan').value;
    if (pan.length == 0) {
        alert('PAN Number cannot be empty');
        document.getElementById('submitBtn').disabled = true;
        errors++;
    }
     loanAmt = document.getElementById('loanAmount').value;
    if (errors == 0) {
        alert('Form Submitted Successfuly.Please click Ok to continue for OTP validation');
        
        //Storing Fullname and Email in local storage to fetch details on next page
        localStorage.setItem("fullName", fullname);
        localStorage.setItem("email", email);
        localStorage.setItem("loanAmount",loanAmt);
        window.location.href = '/htmlfiles/confirm.html';
    }
}
function onValidateFullName() {
    fullname = document.getElementById('fullname').value;
    // FullName validation
    var fnameValmsg = document.getElementById('fullnameValidate');
    if (fullname.length > 0) {
        const patternName = /^[A-Za-z\s]+$/;
        if (!patternName.test(fullname)) {
            fullNamevalidationflag = false;            
            fnameValmsg.textContent = "Full Name can only contain alphabets and spaces";
        }
        else { fullNamevalidationflag = true; 
            fnameValmsg.textContent ="";}
        if(fullNamevalidationflag){
        const patternFullName = fullname.split(/\s+/);
        if (patternFullName.length < 2 || patternFullName.some(part => part.length < 4)) {
            fullNamevalidationflag = false;
            fnameValmsg.textContent = "Full name should have at least two words and each word should be at least four characters";
        }
        else { fullNamevalidationflag = true; 
            fnameValmsg.textContent ="";}
    }
}
    else {
        fnameValmsg.textContent = "Full name cannot be empty"
    }
    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function onValidateEmail() {
    email = document.getElementById('email').value;
    emailvalmsg = document.getElementById('emailValidate');
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patternEmail.test(email)) {

        emailvalmsg.textContent = "Please Enter Valid Email Id, as OTP would be shared on same Email Id";
        emailvalidationflag = false;
    } else { emailvalidationflag = true;
        emailvalmsg.textContent = "";
     }
    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function onValidatePan() {
    const pan = document.getElementById('pan').value;
    panValmsg = document.getElementById('panValidate');
    const patternPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!patternPAN.test(pan)) {    
        panValmsg.textContent = "Please Enter PAN Number in the format ABCDE1234F only";
        panvalidationflag = false;
    } else { panvalidationflag = true;
        panValmsg.textContent ="";}

    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
function onValidateLoanAmount() {
    const loanAmount = document.getElementById('loanAmount').value;
    loanValmsg = document.getElementById('loanAmountValidate');
    const patternLoanAmount = /^[0-9]{1,9}$/;
    if (!patternLoanAmount.test(loanAmount)) {
        loanValmsg.textContent = "Loan Amount should be numeric and up to 999999999 only";
        loanamountvalidationflag = false;
    } else { loanamountvalidationflag = true; 
        loanValmsg.textContent = "";}

    // Enable the Submit Button only if all validations have passed
    if (fullNamevalidationflag && emailvalidationflag && panvalidationflag && loanamountvalidationflag) {
        document.getElementById('submitBtn').disabled = false;
    }
}
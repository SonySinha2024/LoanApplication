function OnProceed() {
    var errors = 0;
    var address1 = document.getElementById('address1').value;
    if (address1.length ==0 ){
        alert('Address1 is a mandatory field');
        errors++;
    }
    
    var city = document.getElementById('city').value;
    if (city.length ==0 ){
        alert('City/Province is a mandatory field');
        errors++;
    }

    var postalcode = document.getElementById('postalCode').value;
    if (postalcode.length ==0 ){
        alert('Zip/Postal Code is a mandatory field');
        errors++;
    }

    var country = document.getElementById('country').value;
    if (country.length ==0 ){
        alert('Country is a mandatory field');
        errors++;
    }
    // Allow user to proceed only if no errors
    if (errors == 0) {
      window.location.href = '/htmlfiles/loantenure.html';
    }
}

function validatePostalCode(){
    var postalCode = document.getElementById('postalCode').value;
    var pstlCodemsg = document.getElementById('postalcodevalmsg');

    if(isNaN(postalCode)){
        pstlCodemsg.textContent = "Postal Code should be a number.";
        document.getElementById('proceedBtn').disabled = true;
        }
        else{
        pstlCodemsg.textContent = "";
        document.getElementById('proceedBtn').disabled = false;
        }
}

function validateState(){
    var state = document.getElementById('state').value;
    var statemsg = document.getElementById('statevalmsg');
    if(isNaN(state)){
        statemsg.textContent = "";
        document.getElementById('proceedBtn').disabled = false;
        }
        else{
        statemsg.textContent = "State name should only contain alphabets";
        document.getElementById('proceedBtn').disabled = true;
        }
}

function validateCountry(){
    var country = document.getElementById('country').value;
    var countrymsg = document.getElementById('countryvalmsg');
    if(isNaN(country)){
        countrymsg.textContent = "";
        document.getElementById('proceedBtn').disabled = false;
        }
        else{
        countrymsg.textContent = "Country name should only contain alphabets";
        document.getElementById('proceedBtn').disabled = true;
        }
}

function validateCity(){
    var city = document.getElementById('city').value;
    var citymsg = document.getElementById('cityvalmsg');
    if(isNaN(city)){
        citymsg.textContent = "";
        document.getElementById('proceedBtn').disabled = false;
        }
        else{
        citymsg.textContent = "City name should only contain alphabets";
        document.getElementById('proceedBtn').disabled = true;
        }
}


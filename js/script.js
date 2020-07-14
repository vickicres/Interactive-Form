//Global variables
const usernameInput = document.getElementById('name');

// focus on "name" field element by default.
usernameInput.focus();


/******************** *********************
target job role section 
********************* *********************/

const jobRoleOption = document.getElementById('title');
const otherJobInput = document.getElementById('other-title');

//target the 'other' input field and hide it initially.
// hide the "other" job roles text box

otherJobInput.hidden = true;
//if the "other" option is choose then will load the text box
jobRoleOption.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobInput.hidden = false;
    } else {
        otherJobInput.hidden = true;
    }
});


/******************** *********************
target t-shirt info section
********************* *********************/

//const sizeOption = document.getElementById('size');
const colorOption = document.getElementById('color');
const designOption = document.getElementById('design');

// Update the “Color” field to read “Please select a T-shirt theme”.
const colorSelectElement = document.getElementById('colors-js-puns');
//Hide the colors in the “Color” drop down menu.
colorSelectElement.hidden = true;

//create a default option
themeOption = colorOption.options; // ???? figure out how 
const themeSelect = designOption[0];
themeSelect.selected = true;
themeSelect.hidden = true;

//add event listener to design element
designOption.addEventListener('change', (e) => {

    colorSelectElement.hidden = false;

    for (let i = 0; i < colorOption.length; i += 1) {
        if (e.target.value === 'js puns') {
            if (i < 3) {
                themeOption[0].selected = true;
                themeOption[i].hidden = false;
            } else {
                themeOption[i].hidden = true;
            }
        }

        if (e.target.value === 'heart js') {
            if (i >= 3) {
                themeOption[3].selected = true;
                themeOption[i].hidden = false;
            } else {
                themeOption[i].hidden = true;
            }
        }
    }

});


/******************** *********************
register for activities section
********************* *********************/

// create a variable to store all the checkboxes

const checkboxActivity = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('label input');

//create total cost
let totalCost = 0;
const calculateCosts = document.createElement('h2');
checkboxActivity.appendChild(calculateCosts);

//Event listener for checkboxes
checkboxActivity.addEventListener('change', (e) => {

    // create a variable named clicked to store the checkbox input that was just clciked
    const clicked = e.target;

    // create a variable to store 'data-day-and-time' attriabute of the checkbox
    const clickedType = clicked.getAttribute('data-day-and-time');

    // calculate the cost of activites, if checked will add the cost and if unchecked will subtract the cost
    const dataCosts = parseInt(clicked.getAttribute('data-cost'));

    if (clicked.checked === true) {
        totalCost += dataCosts;

    } else {
        totalCost -= dataCosts;
    }

    //display the total cost and add a style 
    calculateCosts.innerHTML = 'TOTAL: $' + totalCost;
    calculateCosts.style.color = 'blue';

    //diable and enable the checkboxes when the user clciked the checkboxes
    for (let i = 0; i < checkboxes.length; i += 1) {

        const checkboxesType = checkboxes[i].getAttribute('data-day-and-time');

        if (clickedType === checkboxesType && clicked !== checkboxes[i]) {
            if (clicked.checked === true) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }

        }
    }

});


/******************** *********************
payment info section
********************* *********************/

const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const defaultDisplay = document.querySelector('option[value=select_method]');


// hide the 'select payment option' and payment field
payment.firstElementChild.hidden = true;
//payment[1].selected = true;
paypal.hidden = true;
bitcoin.hidden = true;

//add event listener to payment info
payment.addEventListener('change', (e) => {

    if (payment.value === 'credit card') {
        creditCard.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    } else if (payment.value === 'paypal') {
        paypal.hidden = false;
        creditCard.hidden = true;
        bitcoin.hidden = true;
    } else if (payment.value = 'bitcoin') {
        bitcoin.hidden = false;
        creditCard.hidden = true;
        paypal.hidden = true;
    }

});



/******************** *********************
Form validation
********************* *********************/


//valid username
const nameValidator = () => {

    const nameValue = usernameInput.value;
    if (nameValue === '') {
        usernameInput.style.style.borderColor = 'green';
        return true;
    } else {
        usernameInput.style.style.borderColor = 'red';
        return false;
    }

}

// create error message
//const errorMessage = document.createElement('span');
//const basicInfo = emailInput.parentElement;
//const basicInfoLabels = basicInfo.querySelectorAll('label');
//emailMessage.hidden = true;

//valid email address

const emailInput = document.getElementById('mail');

const emailValidator = () => {
    let email = /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
        
    //create a variable to store email input value
    let emailValue = emailInput.value;
    
    if (email === true) {
        emailInput.style.borderColor = 'green';
        return true;
    } else {
        emailInput.style.borderColor = 'red';
        return false;
    }
    // create a variable to store the .indexOf of the '@' in email value
//    const emailSymbol = emailValue.indexOf('@');
//    // create a variable to store the .lastindexOf the '.' in the email value
//    const emailDot = emailValue.lastIndexOf('.');
//
//    if (emailSymbol > 1 && emailDot > (emailSymbol + 1)) {
//        errorMessage.hidden = true;
//        emailInput.style.borderColor = '';
//        return true;
//    } else {
//        errorMessage.innerHTML = 'Please enter a valid email address.';
//        basicInfo.insertBefore(errorMessage, basicInfoLabels[2]);
//        errorMessage.hidden = false;
//        errorMessage.style.color = 'red';
//        emailInput.style.borderColor = 'red';
//        return false;
//    }
}

//valid activity section

// Using for loop function to check if an activity has been checked or not
const activityValidator = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        //        if (checkboxes[i].type === "checkbox") {
        if (checkboxes[i].checked) {
            checkboxActivity.firstElementChild.style.color = 'green';
            return true;
        }
        //        }
    }
    checkboxActivity.firstElementChild.style.color = 'red';
    return false;
}



//valid credit card number
const creditCardInput = document.getElementById('cc-num');
//const ccErrorMessage = document.createElement('p');
//ccErrorMessage.className = 'cc-error';
//ccErrorMessage.textContent = 'Credit card number must be 13 to 16 digits.'
//creditCardInput.appendChild(ccErrorMessage);


const creditCardValidator = () => {

    let creditValue = /^\d{13,16}$/.test(input);
    let input = creditCardInput.value;
    if (creditValue === true) {
        creditCardInput.style.borderColor = 'green';
        return true;
//        if (creditValue.length >= 13 && creditValue.length <= 16) {
//            creditCardInput.style.borderColor = '';
//            ccErrorMessage.hidden = true;
//            return true;
//        } else if (creditValue.length >= 1 && creditValue.length <= 12) {
//            ccErrorMessage.innerHTML = 'Please enter a valid credit card number.';
//            ccErrorMessage.hidden = false;
//            ccErrorMessage.style.color = 'red';
//            creditCardInput.style.borderColor = 'red';
//            return false;
//
//        } else if (creditValue === '') {
//            ccErrorMessage.innerHTML = 'Please enter credit card number';
//            ccErrorMessage.hidden = false;
//            ccErrorMessage.style.color = 'red';
//            creditCardInput.style.borderColor = 'red';
//            return false;
//        }

    } else {
//        ccErrorMessage.innerHTML = 'Please enter numbers only';
//        ccErrorMessage.hidden = false;
//        ccErrorMessage.style.color = 'red';
        creditCardInput.style.borderColor = 'red';
        return false;
    }

}

//valid zip code
const zipCodeInput = document.getElementById('zip');

const zipcodeValidator = () => {

    let zipcodeValue = /^\d{5}$/.test(zipcode);
    let zipcode = zipCodeInput.value;

    if (zipcodeValue === true) {
        if (zipcodeValue.length === 5) {
            zipCodeInput.style.borderColor = 'green';
            return true;
        } else {
            zipCodeInput.style.borderColor = 'red';
            return false;
        }
    } else {
        zipCodeInput.style.borderColor = 'red';
        return false;
    }

}


//valid cvv

const cvvInput = document.getElementById('cvv');

const cvvValidator = () => {
    let cvv = cvvInput.value;

    let cvvValue = /^\d{3}$/.test(cvv);

        if (cvvValue === true) {
    if (cvvValue.length === 3) {
        cvvInput.style.borderColor = '';
        return true;
    } else {
        cvvInput.style.borderColor = 'red';
        return false;
    }
        } else {
            cvvInput.style.borderColor = 'red';
            return false;
        }

}

const validateAll = () => {
    nameValidator();
    emailValidator();
    activityValidator();
    creditCardValidator();
   zipcodeValidator();
    cvvValidator();
    
    let returnValue = true;
    if (nameValidator(name) === false || emailValidator() === false ||  activityValidator() === false) {
        returnValue = false;
    }
    
    if (payment.value === 'credit card' && zipcodeValidator() === false && cvvValidator() === false ) {
        returnValue = false;
    }
    
    return returnValue;
}



/******************** *********************
 real time validation 
********************* *********************/
const form = document.querySelector('form');

//form.addEventListener('submit', (e) => {
//
//    //Name field
//    if (!usernameInput()) {
//        e.preventDefault();
//    }
//
//    //Email field
//
//    if (!emailValidator()) {
//        e.preventDefault();
//    }
//
//    //Activity 
//
//    if (!activityValidator()) {
//        e.preventDefault();
//    }
//
//    if (!validPayment()) {
//        e.preventDefault();
//    }
//    consloe.log('Submit handler is functional!')
//
//});

form.addEventListener('input submit', (e) => {
//    if (!nameValidator()) {
//        e.preventDefault();
//        console.log('This validator prevented submission');
//    }
//    if (!emailValidator()) {
//        e.preventDefault();
//        console.log('This validator prevented submission');
//    }
//    if (!validateActivity()) {
//        e.preventDefault();
//        console.log('This validator prevented submission');
//    }
//    if (payment.value === 'credit card') {
//        if (!validatePayment()) {
//            e.preventDefault();
//            console.log('This validator prevented submission');
//        }
//    }
    
    if (validateAll() === false) {
        e.preventDefault();
        validateAll();
    }
});

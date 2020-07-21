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


// create default option when no theme selected
const defaultOption = document.createElement('option');
defaultOption.textContent = 'Please select a T-shirt theme';
defaultOption.selected = true;
colorOption.insertBefore(defaultOption, colorOption.firstChild);

const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
const darks = document.querySelector('option[value="darkslategrey"]');
const gold = document.querySelector('option[value="gold"]');

const tomato = document.querySelector('option[value="tomato"]');
const steelblue = document.querySelector('option[value="steelblue"]');
const dimgrey = document.querySelector('option[value="dimgrey"]');

// only show the default option if no theme selected and hide the color drop down.
if (defaultOption.hidden === false) {
    colorSelectElement.hidden = false;
    defaultOption.hidden = true;
    cornflowerblue.hidden = true;
    darks.hidden = true;
    gold.hidden = true;
    tomato.hidden = true;
    steelblue.hidden = true;
    dimgrey.hidden = true;
}

//add event listener to design element
designOption.addEventListener('change', (e) => {
    colorSelectElement.hidden = false;

    // display 'js puns' option only
    if (e.target.value === 'js puns') {
        colorSelectElement.innerHTML = '<label for="color">Color:</label><select id="color"><option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only) </option><option value="gold">Gold (JS Puns shirt only)</option></select>';
        // hide the 'select theme'
        designOption.firstElementChild.hidden = true;

        //display 'heart js' option only
    } else if (e.target.value === 'heart js') {
        colorSelectElement.innerHTML = '<label for="color">Color:</label><select id="color"><option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option></select>';
        // hide the 'select theme'
        designOption.firstElementChild.hidden = true;

        // if no theme to be chosen, then display default option
    } else {
        designOption.firstElementChild.hidden = false;
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
const calculateCosts = document.createElement('h3');
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
    calculateCosts.innerHTML = 'Total: $' + totalCost;
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
const defaultDisplay = document.querySelector('option[value="select method"]');
// hide the 'select payment option' and payment field
defaultDisplay.hidden = true;
// set 'credit card' as default option
payment[1].selected = true;
//hide paypal and bitcoin
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
    const errorName = document.querySelector('label[for="name"]');
    //    let validName = /^\w$/i.test(name);

    if (nameValue === '') {
        usernameInput.style.borderColor = 'red';
        errorName.style.color = 'red';
        return false;
    } else {
        usernameInput.style.borderColor = 'white';
        errorName.style.color = '';
        return true;
    }
    // come out false. if the user did not enter the name then the erro message will show.
}

// add real time input name error display
usernameInput.addEventListener('keyup', nameValidator);

// create email variable
const emailInput = document.getElementById('mail');

//create error email message element
const errorMessage = document.createElement('p');
errorMessage.hidden = true;

const emailValidator = () => {

    const emailError = document.querySelector('label[for="mail"]');
    //create a variable to store email input value
    const emailValue = emailInput.value;
    //input email regex element
    let email = /^[^@]+@[^@.]+\.[a-z]+$/i;

    if (email.test(emailValue) === true) {
        emailInput.style.borderColor = 'white';
        emailError.style.color = '';
        errorMessage.hidden = true;
        return true;
    } else {
        emailInput.style.borderColor = 'red';
        emailError.style.color = 'red';
        errorMessage.hidden = false;
        errorMessage.innerHTML = 'Please enter a valid email address must include "@" and "."';
        emailError.appendChild(errorMessage);
        return false;
    }

    // came out false. if the user didn't enter the email address then the error message will show. 
}

// add real time email input error display
emailInput.addEventListener('keyup', emailValidator);

//valid activity section
// Using for loop function to check if an activity has been checked or not
const activityValidator = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxActivity.firstElementChild.style.color = '';
            checkboxActivity.style.border = '';
            checkboxActivity.style.paddingLeft = 0;
            checkboxActivity.firstElementChild.innerHTML = 'Register for Activities';
            return true;
        }
    }
    checkboxActivity.style.border = 'solid red';
    checkboxActivity.style.paddingLeft = '10px';
    checkboxActivity.firstElementChild.innerHTML = 'Activites checkboxes at least one must be selected!!';
    checkboxActivity.firstElementChild.style.color = 'red';
    return false;
}

//add real time activity 
checkboxActivity.addEventListener('click', activityValidator);

//valid credit card number

const creditCardInput = document.getElementById('cc-num');

// create an error message variables
const ccErrorMessage = document.createElement('p');

// Hides error message
ccErrorMessage.hidden = true;

const creditCardValidator = () => {
    const ccError = document.querySelector('label[for="cc-num"]');
    const creditValue = creditCardInput.value;
    let credit = /^\d{13,16}$/;
    if (credit.test(creditValue) === true) {
        creditCardInput.style.borderColor = 'white';
        ccError.style.color = '';
        ccErrorMessage.hidden = true;
        return true;

    } else if (creditValue.length >= 1 && creditValue.length <= 12) {
        ccErrorMessage.innerHTML = 'Please enter only numbers that is between 13 and 16 digits long.';
        creditCardInput.parentElement.appendChild(ccErrorMessage);
        ccErrorMessage.hidden = false;
        ccErrorMessage.style.color = 'red';
        creditCardInput.style.borderColor = 'red';
        ccError.style.color = 'red';
        return false;
    } else {
        ccErrorMessage.innerHTML = 'Please enter a valid credit card numbers';
        creditCardInput.parentElement.appendChild(ccErrorMessage);
        ccErrorMessage.hidden = false;
        ccErrorMessage.style.color = 'red';
        creditCardInput.style.borderColor = 'red';
        ccError.style.color = 'red';
        return false;
    }

}


//valid zip code
const zipCodeInput = document.getElementById('zip');

const zipcodeValidator = () => {
    const zipError = document.querySelector('label[for="zip"]');

    const zipcodeValue = zipCodeInput.value;
    let zipcode = /^\d{5}$/;

    if (zipcode.test(zipcodeValue) === true) {
        zipCodeInput.style.borderColor = 'white';
        zipError.style.color = '';
        return true;

    } else {
        zipCodeInput.style.borderColor = 'red';
        zipError.style.color = 'red';
        return false;
    }
}


//valid cvv
const cvvInput = document.getElementById('cvv');

const cvvValidator = () => {
    const cvvError = document.querySelector('label[for="cvv"]');

    const cvvValue = cvvInput.value;
    const cvv = /^\d{3}$/;

    if (cvv.test(cvvValue) === true) {
        cvvInput.style.borderColor = 'white';
        cvvError.style.color = '';
        return true;
    } else {
        cvvInput.style.borderColor = 'red';
        cvvError.style.color = 'red';
        return false;
    }
}


// set credit card payment validate

const validatePayment = () => {
    creditCardValidator();
    zipcodeValidator();
    cvvValidator();

        if (creditCardValidator() === false || zipcodeValidator() === false || cvvValidator() === false) {
            return false;
        }  else {
             return true;
            
        }
    
}


/******************** *********************
 real time validation 
********************* *********************/

const form = document.querySelector("form");

form.addEventListener('submit', (e) => {

    if (!nameValidator()) {
        e.preventDefault();
        console.log(nameValidator());
    }
    if (!emailValidator()) {
        e.preventDefault();
        console.log(emailValidator());
    }

    if (!activityValidator()) {
        e.preventDefault();
        console.log(activityValidator());
    }
    //    if (!creditCardValidator()) {
    //        e.preventDefault();
    //        console.log(creditCardValidator());
    //    }
    //    if (!zipcodeValidator()) {
    //        e.preventDefault();
    //        console.log(zipcodeValidator());
    //    }
    //    if (!cvvValidator()) {
    //        e.preventDefault();
    //        console.log(cvvValidator());
    //    }
if (payment.value === 'credit card') {
    if (!validatePayment()) {
        e.preventDefault();
        console.log(validatePayment());
    }
        }

    //    consloe.log('Submit handler is functional!');
});
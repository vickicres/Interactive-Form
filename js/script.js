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
        colorSelectElement.innerHTML = '';
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
    const nameError = document.querySelector('label[for="name"]');
    const nameValue = usernameInput.value;
    if (nameValue.length > 0) {
        nameError.style.borderColor = 'white';
        nameError.hidden = true;
        return true;
    } else {
        nameError.hidden = false;
        usernameInput.style.borderColor = 'red';
        nameError.innerHTML = 'Please enter your name!';
        nameError.style.color = 'red';
        nameError.style.display = 'red';
        nameError.style.fontSize = '20px';
        return false;
    }
    // come out false. if the user did not enter the name then the erro message will show.
}



//valid email address
const emailValidator = () => {
    const emailInput = document.getElementById('mail');
    const emailError = document.querySelector('label[for="mail"]');
    const email = /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
    //create a variable to store email input value
    const emailValue = emailInput.value;
    //create a variable to store the .indexOf of the '@' in email value
    const emailSymbol = emailValue.indexOf('@');
    // create a variable to store the .lastindexOf the '.' in the email value
    const emailDot = emailValue.lastIndexOf('.');
    if (emailSymbol > 1 && emailDot > (emailSymbol + 1)) {
        emailError.hidden = true;
        emailInput.style.borderColor = 'white';
        return true;
    } else {
        emailError.hidden = false;
        emailError.innerHTML = 'Please enter a valid email address!';
        emailError.style.color = 'red';
        emailError.style.fontSize = '20px';
        emailInput.style.borderColor = 'red';
        emailError.style.display = 'red';
        return false;
    }

    // came out false. if the user didn't enter the email address then the error message will show. 
}



//valid activity section
// Using for loop function to check if an activity has been checked or not
const activityValidator = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    checkboxActivity.style.border = 'solid red';
    checkboxActivity.style.padding = '5px 15px';
    checkboxActivity.firstElementChild.innerHTML = 'Activites checkboxes at least one must be selected!!';
    checkboxActivity.firstElementChild.style.color = 'red';
    return false;
}


//valid credit card number

const creditCardInput = document.getElementById('cc-num');
const ccErrorMessage = document.createElement('span');
ccErrorMessage.className = 'cc-error';
ccErrorMessage.textContent = 'Please enter a valid credit card number must have 13 and 16 digits.'
ccErrorMessage.style.color = 'red';
creditCardInput.parentElement.appendChild(ccErrorMessage);
ccErrorMessage.hidden = true;

const creditCardValidator = () => {

    const creditValue = creditCardInput.value;
    const credit = /^[0-9]{13,16}$/.test(creditCardInput);

    if (creditValue.length >= 13 && creditValue.length <= 16) {
        creditCardInput.style.borderColor = 'white';
        ccErrorMessage.hidden = true;
        return true;
    } else {
        ccErrorMessage.hidden = false;
        creditCardInput.style.borderColor = 'red';
        return false;
    }
}


//valid zip code
const zipCodeInput = document.getElementById('zip');

const zipcodeValidator = () => {

    const zipcodeValue = zipCodeInput.value;
    const zipcode = /^[0-9]{5}$/.test(zipCodeInput);

    if (zipcodeValue.length === 5) {
        zipCodeInput.style.borderColor = 'white';
        return true;

    } else {
        zipCodeInput.style.borderColor = 'red';
        return false;
    }
}


//valid cvv
const cvvInput = document.getElementById('cvv');

const cvvValidator = () => {

    const cvvValue = cvvInput.value;
    const cvv = /^[0-9]{3}$/.test(cvvInput);

    if (cvvValue.length === 3) {
        cvvInput.style.borderColor = 'white';
        return true;
    } else {
        cvvInput.style.borderColor = 'red';
        return false;
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
    if (!creditCardValidator()) {
        e.preventDefault();
        console.log(creditCardValidator());
    }
    if (!zipcodeValidator()) {
        e.preventDefault();
        console.log(zipcodeValidator());
    }
    if (!cvvValidator()) {
        e.preventDefault();
        console.log(cvvValidator());
    }

    //    consloe.log('Submit handler is functional!');
});

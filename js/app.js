/**
 *
 * @param {Element} domNode
 * @param {string} errorMsg
 */
function displayErrorMessage(domNode, errorMsg) {
  domNode.parentElement.classList.add("has-error");
  domNode.nextElementSibling.classList.remove("hidden");
  domNode.nextElementSibling.textContent = errorMsg;
}

/**
 *
 * @param {Element} domNode
 */
function hideErrorMessage(domNode) {
  domNode.parentElement.classList.remove("has-error");
  domNode.nextElementSibling.classList.add("hidden");
  domNode.nextElementSibling.textContent = "";
}

/**
 *
 * @returns {[boolean, string]}
 */
function isDayFieldValid() {
  let isValid;

  const $dayInputField = document.querySelector("#day");
  const dayInputValue = $dayInputField.value;

  const isInputEmpty = dayInputValue.length === 0;
  const isInputInvalid =
    isNaN(dayInputValue) || dayInputValue <= 0 || dayInputValue > 31;

  if (isInputEmpty) {
    displayErrorMessage($dayInputField, "This field is required.");
    isValid = false;
  } else if (isInputInvalid) {
    displayErrorMessage($dayInputField, "Must be a valid day.");
    isValid = false;
  } else {
    hideErrorMessage($dayInputField);
    isValid = true;
  }

  return [isValid, dayInputValue];
}

/**
 *
 * @returns {[boolean, string]}
 */
function isMonthFieldValid() {
  let isValid;

  const $monthInputField = document.querySelector("#month");
  const monthInputValue = $monthInputField.value;

  const isInputEmpty = monthInputValue.length === 0;
  const isInputInvalid =
    isNaN(monthInputValue) || monthInputValue <= 0 || monthInputValue > 12;

  if (isInputEmpty) {
    displayErrorMessage($monthInputField, "This field is required.");
    isValid = false;
  } else if (isInputInvalid) {
    displayErrorMessage($monthInputField, "Must be a valid month.");
    isValid = false;
  } else {
    hideErrorMessage($monthInputField);
    isValid = true;
  }

  return [isValid, monthInputValue];
}

/**
 *
 * @returns {[boolean, string]}
 */
function isYearFieldValid() {
  let isValid;

  const $yearInputField = document.querySelector("#year");
  const yearInputValue = $yearInputField.value;

  const isInputEmpty = yearInputValue.length === 0;
  const isInputInvalid =
    isNaN(yearInputValue) || yearInputValue <= 1900 || yearInputValue > 2023;

  if (isInputEmpty) {
    displayErrorMessage($yearInputField, "This field is required.");
    isValid = false;
  } else if (isInputInvalid) {
    displayErrorMessage($yearInputField, "Must be a valid year.");
    isValid = false;
  } else {
    hideErrorMessage($yearInputField);
    isValid = true;
  }

  return [isValid, yearInputValue];
}

/**
 * 
 * @param {string} day 
 * @param {string} month 
 * @param {string} year 
 */
function makeCaculation(day, month, year) {
  console.log("Make caculation")
  console.log(day, month, year)
}

function onSubmitForm() {
  const $form = document.querySelector(".form");

  $form.addEventListener("submit", function (e) {
    e.preventDefault();

    const [isDayValid, dayFieldValue] = isDayFieldValid();
    const [isMonthValid, monthFieldValue] = isMonthFieldValid();
    const [isYearValid, yearFieldValue] = isYearFieldValid();

    if (isDayValid && isMonthValid && isYearValid) {
      makeCaculation(dayFieldValue, monthFieldValue, yearFieldValue)
    }
  });
}

function main() {
  onSubmitForm();
}

main();

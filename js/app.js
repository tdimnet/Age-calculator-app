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
 * @returns {boolean}
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

  return isValid;
}

/**
 *
 * @returns {boolean}
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

  return isValid;
}

function onSubmitForm() {
  const $form = document.querySelector(".form");

  $form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isDayValid = isDayFieldValid();
    const isMonthValid = isMonthFieldValid();
  });
}

function main() {
  onSubmitForm();
}

main();

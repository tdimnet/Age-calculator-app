/**
 * 
 * @param {Element} domNode 
 * @param {string} errorMsg
 * 
 * @returns {boolean}
 */
function displayErrorMessage(domNode, errorMsg) {
  domNode.parentElement.classList.add('has-error')
  domNode.nextElementSibling.classList.remove('hidden')
  domNode.nextElementSibling.textContent = errorMsg
}

function isDayFieldValid() {
  let isValid = Boolean

  const $dayInputField = document.querySelector("#day");
  const dayInputValue = $dayInputField.value;

  const isInputInvalid =
    isNaN(dayInputValue) || dayInputValue <= 0 || dayInputValue > 31;

  if (isInputInvalid) {
    displayErrorMessage($dayInputField, 'Must be a valid day.')
    isValid = false
  } else {
    console.log("valid");
    isValid = true
  }

  return isValid
}

function onSubmitForm() {
  const $form = document.querySelector(".form");

  $form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isDayValid = isDayFieldValid();
  });
}

function main() {
  onSubmitForm();
}

main();

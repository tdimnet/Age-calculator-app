/**
 * 
 * @param {Element} domNode 
 */
function displayErrorMessage(domNode) {
  domNode.parentElement.classList.add('has-error')
  domNode.nextElementSibling.classList.remove('hidden')
}

function isDayFieldValid() {
  const $dayInputField = document.querySelector("#day");
  const dayInputValue = $dayInputField.value;

  const isInputInvalid =
    isNaN(dayInputValue) || dayInputValue <= 0 || dayInputValue > 31;

  if (isInputInvalid) {
    displayErrorMessage($dayInputField)
  } else {
    console.log("valid");
  }
}

function onSubmitForm() {
  const $form = document.querySelector(".form");

  $form.addEventListener("submit", function (e) {
    e.preventDefault();

    isDayFieldValid();
  });
}

function main() {
  onSubmitForm();
}

main();

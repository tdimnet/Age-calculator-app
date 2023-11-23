function isDayFieldValid() {
  const $dayInputField = document.querySelector('#day')
  const dayInputValue = $dayInputField.value

  const isInputInvalid = isNaN(dayInputValue) || dayInputValue <= 0 || dayInputValue > 31

  if (isInputInvalid) {
    console.log('invalid')
  } else {
    console.log('valid')
  }
}

function onSubmitForm() {
  const $form = document.querySelector('.form')

  $form.addEventListener('submit', function(e) {
    e.preventDefault()

    isDayFieldValid()
  })
}

function main() {
  onSubmitForm()
}

main()


const form = document.querySelector('#form')
const errors = document.querySelector('.errors')
const errorsList = document.querySelector('.errors-list')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#password-confirmation')
const terms = document.querySelector('#terms')
const errorMessages = []

form.addEventListener('submit', e => {
  clearErrors()

  if (username.value.length < 6) {
    errorMessages.push('Ensure the username is at least 6 characters long')
  }

  if (password.value.length < 10) {
    errorMessages.push('Ensure the password is at least 10 characters long')
  }

  if (password.value !== passwordConfirmation.value) {
    errorMessages.push('Ensure the password and confirmation password match')
  }

  if (!terms.checked) {
    errorMessages.push('Ensure the terms checkbox is checked')
  }

  if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
  }
})

function clearErrors() {
  while (errorsList.hasChildNodes()) {
    errorMessages.pop()
    errorsList.removeChild(errorsList.firstChild)
  }
  errors.classList.remove('show')
}

function showErrors(errorMessages) {
  errors.classList.add('show')
  errorMessages.forEach(error => {
    const errorItem = document.createElement('li')
    errorItem.innerText = error
    errorsList.appendChild(errorItem)
  })
}

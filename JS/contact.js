const name = document.querySelector("#name")
const nameError = document.querySelector("#nameError")

const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")

const message = document.querySelector("#message")
const messageError = document.querySelector("#messageError")

const form = document.querySelector("#contactForm")


let fieldsValid = 0

function validateForm() {

    event.preventDefault();

    // Validate name
    if (checkLength(name.value, 0)) {
        nameError.style.display = "none"
        fieldsValid++
    } else {
        nameError.style.display = "block"
    }

    // Validate Email
    if (validateEmail(email.value)) {
        emailError.style.display = "none"
        fieldsValid++
    } else {
        emailError.style.display = "block"
    }

    // Validate message
    if (checkLength(message.value, 0)) {
        messageError.style.display = "none"
        fieldsValid++
    } else {
        messageError.style.display = "block"
    }

    // If all fields are valid - create a sucess message
    if (fieldsValid === 3) {
        form.innerHTML = `<p style="color: white; font-size: 12px; text-align: center"> The form was sent to rainy days ✅</p>`
    } else {
        // Fields valid needs to be reset every time it fails, if not you can validate one field and press submit 4 times and the form will be sent.
        fieldsValid = 0
    }
}

// Function to check if length of the value if greater then the length parameter
function checkLength(value, length) {
    if (value.trim().length > length) {
        return true
    } else {
        return false
    }
}

// Function to validate an input to a regEx
// The regEx means that it must containt an "@" and a "."
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/
    const patternMatches = regEx.test(email)
    return patternMatches
}



form.addEventListener("submit", validateForm)
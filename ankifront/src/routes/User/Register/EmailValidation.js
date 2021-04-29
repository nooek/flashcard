import validator from "validator"

let valid = false

const validateEmail = (email) => {
    if (validator.isEmail(email)){
        valid = true
    }
    else{
        valid = false
    }
}

export { validateEmail, valid }
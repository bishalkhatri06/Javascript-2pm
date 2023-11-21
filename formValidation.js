const displayMsg = (msg, id, colorName) => {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = colorName
}

const fnameValidation = () => {
    const first_name = document.getElementById('fname').value
    if (first_name == "") {
        displayMsg('firstname is mandatory', 'fnameMsg', 'red')
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('FirstName only accepts alphabets','fnameMsg','red')
        return false
    }
    else if (first_name.length < 2) {
        displayMsg('firstname must be more than 2 characters', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid firstname', 'fnameMsg', 'green')
    }
}

const lnameValidation = () => {
    const last_name = document.getElementById('lname').value
    if (last_name == "") {
        displayMsg('lastname is mandatory', 'lnameMsg', 'red')
        return false
    }
    else if (!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('LastName only accepts alphabets','lnameMsg','red')
        return false
    }
    else if (last_name.length < 3) {
        displayMsg('lastname must be more than 2 characters', 'lnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid lastname', 'lnameMsg', 'green')
    }
}

const emailValidation = () => {
    const email = document.getElementById('email').value
    if (email == "") {
        displayMsg('email is mandatory', 'emailMsg', 'red')
        return false
    }
    else if (!email.match(/^([a-z0-9])[a-z0-9\.\_]+[\@].([a-z])+\.([a-z])+$/)){
        displayMsg('Invalid email','emailMsg','red')
        return false
    }
    else if (email.length < 3) {
        displayMsg('email must be more than 2 characters', 'emailMsg', 'red')
        return false
    }
    else {
        displayMsg('valid email', 'emailMsg', 'green')
    }
}

const pswValidation = () => {
    const psw = document.getElementById('psw').value
    if (psw == "") {
        displayMsg('psw is mandatory', 'pswMsg', 'red')
        return false
    }
    else if (!psw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_$?!#]).{8,100}$/)){
        displayMsg('weak password & password should be like this: Abc@123# and must contain at least 8 character','pswMsg','red')
        return false
    }
    else {
        displayMsg('valid password', 'pswMsg', 'green')
    }
}


const cpswValidation = () => {
    const psw = document.getElementById('psw').value
    const cpsw = document.getElementById('cpsw').value
    if (cpsw == "") {
        displayMsg('confirm password is mandatory', 'cpswMsg', 'red')
        return false
    }
    else if (psw!=cpsw){
        displayMsg('Password and CPassword doesnot match','cpswMsg','red')
        return false
    }
    else {
        displayMsg('Password Confirmed', 'cpswMsg', 'green')
    }
}

const validForm=()=>{
    if(fnameValidation() && lnameValidation() && emailValidation() && pswValidation() && cpswValidation()){
        return true
    }
    else{
        return false
    }
}




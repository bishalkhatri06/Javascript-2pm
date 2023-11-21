const pswInput = document.querySelector(".pass-field input")
const eyeIcon = document.querySelector(".pass-field i")

const list = document.querySelectorAll(".requirement-list li")

// an array of password requirements with corresponding regx and index of the requrement lit item

const requirement = [
    { regex: /.{8,}/, index: 0 }, // minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // at least one number
    { regex: /[A-Z]/, index: 2 }, // at least one uppercase letter
    { regex: /[a-z]/, index: 3 }, // at least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 4 }, // at least one special character
]

pswInput.addEventListener("keyup", (e) => {
    // check if the password matches the requrirement regex
    requirement.forEach(item => {
        const isValid = item.regex.test(e.target.value)
        const requirementItem = list[item.index]

        // updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid")
            requirementItem.firstElementChild.className = "fa-solid fa-check"
        }
        else {
            requirementItem.classList.remove("valid")
            requirementItem.firstElementChild.className = "fa-solid fa-circle"
        }
    })
})

eyeIcon.addEventListener("click", () => {
    // toggle the password input type between "password" and "text"
    pswInput.type = pswInput.type === "password" ? "text" : "password"

    eyeIcon.className = `fa-solid fa-eye${pswInput.type === "password" ? "" : "-slash"} `
})
const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email "),
    passField = form.querySelector(".pass-field"),
    passInput = passField.querySelector(".pass"),
    pass2Field = form.querySelector(".pass2-field"),
    pass2Input = pass2Field.querySelector(".pass2");


//email validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid")
    }
    return emailField.classList.remove("invalid");
}
//submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    pass();
    confirmPass();
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", pass);
    pass2Input.addEventListener("keyup", confirmPass);
})
//show and hide Password
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("ri-eye-off-fill", "ri-eye-fill");
            return pInput.type = "text";
        }
        eyeIcon.classList.replace("ri-eye-fill", "ri-eye-off-fill");
        return pInput.type = "password";
    })
})
//password validation
function pass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    return passField.classList.remove("invalid");
}
//Confirm Password validation
function confirmPass() {
    if (passInput.value !== pass2Input.value || pass2Input.value==="") {
        return pass2Field.classList.add("invalid");
    }
    return pass2Field.classList.remove("invalid");
} 
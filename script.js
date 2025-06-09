const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email "),
    passField = form.querySelector(".pass-field"),
    passInput = passField.querySelector(".pass"),
    pass2Field = form.querySelector(".pass2-field"),
    pass2Input = passField.querySelector(".pass2");


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
    checkEmail()
    emailInput.addEventListener("keyup", checkEmail)
})
//show and hide Password
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("ri-eye-off-fill", "ri-eye-fill");
            return pInput.type="text";
        }
          eyeIcon.classList.replace("ri-eye-fill", "ri-eye-off-fill");
            return pInput.type="password";
    })
})
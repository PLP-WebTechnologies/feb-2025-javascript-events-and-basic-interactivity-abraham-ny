// evt handlers
document.getElementById("colorButton").addEventListener("click", () => {
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Secret double-click action
const secretButton = document.getElementById("secretButton");
secretButton.addEventListener("dblclick", () => {
    document.getElementById("secretMessage").style.display = "block";
});

// gamllery
function changeImage(imgElement) {
    document.getElementById("mainImage").src = imgElement.src;
}

// tabs
function openTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
}

// frm valid
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
    const emailError = document.getElementById("emailError");
    if (!emailInput.validity.valid) {
        emailError.textContent = "Invalid email format.";
    } else {
        emailError.textContent = "";
    }
});

passwordInput.addEventListener("input", () => {
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
    } else {
        passwordError.textContent = "";
    }
});

document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formMessage = document.getElementById("formMessage");
    if (emailInput.validity.valid && passwordInput.value.length >= 8) {
        formMessage.textContent = "Form Submitted Successfully!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Please fix the errors above.";
        formMessage.style.color = "red";
    }
});

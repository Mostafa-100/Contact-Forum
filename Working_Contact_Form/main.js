const contactForm = document.querySelector(".form__fields");

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputWebsite = document.getElementById('input-website');
const messageArea = document.getElementById('message-area');

const btnSend = document.getElementById('send-button');
const statusMessage = document.getElementById('status-message');

contactForm.addEventListener("submit", function (event) {
    statusMessage.style.display = "inline";
    event.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "main.php");

    xhr.onload = () => {
        let response = xhr.response;
        statusMessage.textContent = response;
        if (response.indexOf("Enter validate email") || response.indexOf("Email and message field is required!")) {
            statusMessage.style.color = "#FF0000";
        } else {
            form.reset(); // What is this?
        }
    }

    let contactFormData = new FormData(contactForm);

    xhr.send(contactFormData);
})
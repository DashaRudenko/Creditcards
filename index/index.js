document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
};

document.addEventListener("DOMContentLoaded", function () {
    const agreeBtn = document.getElementById("agree-btn");
    const successModalOverlay = document.getElementById("success-modal-overlay");
    const cancelModalOverlay = document.getElementById("cancel-modal-overlay");

    agreeBtn.addEventListener("click", function () {
        const isFormValid = validateForm();

        if (isFormValid) {
            successModalOverlay.style.display = "flex";
        } else {
            cancelModalOverlay.style.display = "flex";
        }
    });

    document.getElementById("okay-btn-success").addEventListener("click", function () {
        successModalOverlay.style.display = "none";
    });

    document.getElementById("okay-btn-cancel").addEventListener("click", function () {
        cancelModalOverlay.style.display = "none";
    });

    function validateForm() {
        const inputs = document.querySelectorAll('.inputBox input, .inputBox select');
        for (const input of inputs) {
            if (input.value.trim() === '') {
                return false; 
            }
        }
        return true;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var numericInput = document.getElementById('numeric-input');
    numericInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

document.getElementById('english-input').addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});



function validateForm() {
    clearErrors();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '') {
        displayError('usernameError', 'Please enter a username.');
    }

    if (email.trim() === '') {
        displayError('emailError', 'Please enter an email.');
    }

    if (password.trim() === '') {
        displayError('passwordError', 'Please enter a password.');
    }

    if (!hasErrors()) {
        showModal('Registration successful!');
    }
}

function displayError(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.textContent = '';
        element.style.display = 'none';
    });
}

function hasErrors() {
    var errorElements = document.querySelectorAll('.error');
    return Array.from(errorElements).some(function (element) {
        return element.textContent.trim() !== '';
    });
}

function showModal(message) {
    var modal = document.getElementById('myModal');
    var modalMessage = document.getElementById('modalMessage');

    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function redirectToNextPage() {
    window.location.href = '/index.html';
}

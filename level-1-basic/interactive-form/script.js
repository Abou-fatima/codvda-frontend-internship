const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const countryCodeInput = document.getElementById('countryCode');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

// Fonctions de validation
function validateName() {
    const value = nameInput.value.trim();
    if (value === '') {
        showError(nameInput, 'Le nom est requis');
        return false;
    } else if (value.length < 2) {
        showError(nameInput, 'Le nom doit contenir au moins 2 caractères');
        return false;
    } else {
        showSuccess(nameInput);
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
        showError(emailInput, 'L\'email est requis');
        return false;
    } else if (!regex.test(value)) {
        showError(emailInput, 'Email invalide');
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
}

function validatePhone() {
    const value = phoneInput.value.trim();
    const code = countryCodeInput.value;
    // Validation simple : au moins 6 chiffres, max 15, commence par un chiffre non nul
    const regex = /^[1-9][0-9]{5,14}$/;
    if (value === '') {
        showError(phoneInput, 'Le téléphone est requis');
        return false;
    } else if (!regex.test(value.replace(/\D/g, ''))) {
        showError(phoneInput, 'Numéro invalide pour le pays sélectionné');
        return false;
    } else {
        showSuccess(phoneInput);
        return true;
    }
}

function validatePassword() {
    const value = passwordInput.value;
    if (value === '') {
        showError(passwordInput, 'Mot de passe requis');
        return false;
    } else if (value.length < 6) {
        showError(passwordInput, 'Minimum 6 caractères');
        return false;
    } else {
        showSuccess(passwordInput);
        return true;
    }
}

function validateConfirm() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    if (confirm === '') {
        showError(confirmInput, 'Confirmation requise');
        return false;
    } else if (password !== confirm) {
        showError(confirmInput, 'Les mots de passe ne correspondent pas');
        return false;
    } else {
        showSuccess(confirmInput);
        return true;
    }
}

function showError(input, message) {
    const errorElement = document.getElementById(input.id + 'Error');
    errorElement.textContent = message;
    input.classList.add('error');
    input.classList.remove('valid');
}

function showSuccess(input) {
    const errorElement = document.getElementById(input.id + 'Error');
    errorElement.textContent = '';
    input.classList.remove('error');
    input.classList.add('valid');
}

// Événements focus / blur
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);
confirmInput.addEventListener('blur', validateConfirm);

// Validation en temps réel
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);
confirmInput.addEventListener('input', validateConfirm);

// Validation avant soumission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirm();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid) {
        successMessage.style.display = 'block';
        form.reset();
        // Réinitialiser les classes
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('valid', 'error');
        });
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
});
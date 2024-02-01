function checkLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Check if username and password match
    if (usernameInput === 'sansat' && passwordInput === 'janish') {
        displayLoginMessage();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function displayLoginMessage() {
    const loginMessage = document.getElementById('login-message');
    loginMessage.classList.remove('hidden');
}

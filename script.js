function registerUser() {
    const regUsername = document.getElementById('regUsername').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;

    // Here, you might perform validation and send the data to the server
    // For this example, let's pretend registration is successful
    alert("Registration successful!");
}

function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Here, you might perform validation and send the data to the server
    // For this example, let's pretend login is successful
    localStorage.setItem('loggedInUser', loginUsername);
    showUserContent();
}

function showUserContent() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('userContent').style.display = 'block';
        document.getElementById('loggedInUser').innerText = loggedInUser;
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('userContent').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
}

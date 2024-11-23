const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("Confirm_password"); // Corrected ID
const school_board = document.getElementById("school_board");
const submitBtn = document.getElementById("submit");

submitBtn.onclick = function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate inputs
    if (username.value == '') {
        alert("Please enter your username");
        return;
    } else if (email.value == '') {
        alert("Please enter your email");
        return;
    } else if (password.value == '') {
        alert("Please enter your password");
        return;
    } else if (password_confirm.value != password.value) {
        alert("Passwords do not match");
        return;
    } else if (school_board.value == '') {
        alert("Please enter your school board. For example: ocdsb");
        return;
    }

    // Redirect user
    window.location.href = "https://keciezm2.github.io/Schatch/chat.html";

    // Save user info (localStorage example)
    const userinfo = {
        username: username.value,
        email: email.value,
        password: password.value,
        school_board: school_board.value
    };

    // Convert to JSON and save to localStorage
    localStorage.setItem('userinfo', JSON.stringify(userinfo));

    console.log("User info saved locally:", userinfo);
};

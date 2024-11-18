const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBTN = document.getElementById("Submit");

submitBTN.onclick = function () {
    fetch('./userinfo.json') // Ensure this file path is correct
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch the JSON file');
            }
            return res.json();
        })
        .then(data => {
            // Assuming 'data' is an array of user objects with 'email' and 'password' properties
            const user = data.find(user => user.email === email.value && user.password === password.value);

            if (user) {
                // Email and password matched
                window.location.href = 'https://keciezm2.github.io/Schatch/chat.html';
                // Continue the application flow here
            } else {
                // No match found
                console.error("Invalid email or password");
                alert("Invalid email or password");
            }
        })
        .catch(error => {
            console.error("Error fetching or processing the JSON file:", error);
        });
};

function getInputvalue(){
    email.value;
    password.value;

    return {
        email: email.value,
        password: password.value
    };
}
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_comfirm = document.getElementById("Comfirm_password");
const school_board = document.getElementById("school_board");
const submitBtn = document.getElementById("submit");
const fs = require('fs');

submitBtn.onclick = function(){
    if(username == ''){
        alert("Please enter your username");
        return;
    } else if (email.innerHTML == ''){
        alert('Please enter your email');
        return;
    } else if (password.innerHTML == '') {
        alert('Please enter your password');
        return;
    } else if (password_comfirm.innerHTML != password.innerHTML){
        alert('Please type your password');
        return;
    } else if (school_board.innerHTML == ''){
        alert('Please enter your school board. For example: ocdsb');
        return;
    } else {
        window.location.href = "https://keciezm2.github.io/Schatch/chat.html";
    }

    const userinfo = [username.value, email.value, password.value, school_board.value];

    const filepath = './userinfo.json';

    const jsonData = JSON.stringify(userinfo, null, 2);

    fs.writeFile(filepath, jsonData, 'utf-8', (err) => {
        if (err){
            console.error('Error writing file');
        } else {
            console.log('File has been updated successfully');
        }
    })
}
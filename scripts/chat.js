const message = document.getElementById("message");
const SendBtn = document.getElementById("Send");
const comamnd_input = document.getElementById("Command_holder");
let user;
const inputValue = getInputvalue();


fetch('./userinfo')
    .then(res => {
        if (!res.ok){
            throw new Error('Failed to fetch the JSON file');
        }
        return res.json();
    })
    .then(data => {
        user = data.find(user => user.username === username.value && user.password === password.value);
    });

if (user == inputValue){
    alert('Your data successfully loaded');
} else {
    alert(`Sorry can't load your data. Solution is refresh the page or get in conatact with the owner. Discord: "kecciezmi1"`);
}

SendBtn.onclick = function(){
    if (message.value != ''){
        var createMessage = document.createElement('h1').innerHTML += `${user}: ${message.value}`;
    } else {
        console.log('');
    }
}
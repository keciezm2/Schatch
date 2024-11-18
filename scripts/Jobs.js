const Job_announce = document.getElementById("Job");
const btn = document.getElementById("enterBTN");
let user;


fetch('./userinfo.json')
    .then(res => {
        if (!res.ok){
            throw new Error('Failed to fetch Json');
        }
        return res.json();
    })
    .then(data => {
        user = data.find(user => user.email === email.value && user.password === password.value);
        if (user.email == 'keciezmi.jjlch.java@gmailcom' && user.password == `!^'&!')!'!(')!)'('='!('))`){
            Job_announce.style.display = 'block';
            btn.style.display = 'block';
        }
        else {
            Job_announce.style.display = 'none';
            btn.style.display = 'none';
        }
});

btn.onclick = function(){
    const message = document.createElement("h1").innerHTML = `${user.email}: ${Job_announce.value}`;
}
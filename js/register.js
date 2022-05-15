const fname= document.querySelector('.fname');
const lname= document.querySelector('.lname');
const email= document.querySelector('.email');
const pwd= document.querySelector('.pwd');
const confirmPwd= document.querySelector('.confirmpwd');
const btn= document.querySelector('.btn');
const form= document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    if(pwd.value !== confirmPwd.value){
        alert("password did not match");
        return;
    }

    const userData = {
        isLoggedIn: true,
        firstname : fname.value,
        lastname : lname.value,
        email : email.value,
        password : pwd.value,
        tasks: []
    }
    localStorage.setItem(email.value, JSON.stringify(userData));
    sessionStorage.setItem('userEmail', email.value)

    // window.location.replace("http://127.0.0.1:5503/login.html");
});






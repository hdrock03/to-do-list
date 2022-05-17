const fname= document.querySelector('.fname');
const lname= document.querySelector('.lname');
const email= document.querySelector('.email');
const pwd= document.querySelector('.pwd');
const confirmPwd= document.querySelector('.confirmpwd');
const btn= document.querySelector('.btn');
const form= document.querySelector('.form');

// yaha pe button pe event listener nh lgega jb bhi form ke under koi bhi button lgana hga tb form pe eventlistener lgega
form.addEventListener('submit', e => {
    e.preventDefault();

    if(pwd.value !== confirmPwd.value){
        alert("password did not match");
        return;
    }

    // yeh object banaye hai taki user jab user login kre to local storage me is format me saved ho
    const userData = {
        isLoggedIn: true,
        firstname : fname.value,
        lastname : lname.value,
        email : email.value,
        password : pwd.value,
        tasks: []
    }

    // localStorage me key value pair me saved hota hai iske liye email.value dale hai key me qki email sbka alg alg hota h 
    // userdata ko stringyfy lgaye hai qki wo object hai aur local storage me string save hota hai to hair user ke email ke sath uska data 
    // userData ke format me saved hoga
    localStorage.setItem(email.value, JSON.stringify(userData));

    // session storage me userEmail ke naam se save kiye taki pata chale kon user avi active h
    sessionStorage.setItem('userEmail', email.value)

    // window.location.replace("http://127.0.0.1:5503/login.html");
});






let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#rePassword");
let Signup = document.querySelector('#Signup');

Signup.addEventListener('click',(e)=>{
    e.preventDefault()
    if (userName.value === '' || email.value === '' || password.value === '') {
        document.getElementById('wrong').innerHTML = 'Please fill Data'
    } else {
        localStorage.setItem('username' , userName.value)
        localStorage.setItem('email' , email.value)
        localStorage.setItem('password' , password.value)
        setTimeout(()=>{
            // re dir
            window.location = 'index.html'
        },1500)
    }
})
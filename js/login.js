function login(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

if (userName !== 'admin' &&  password !== '123') {
    document.getElementById('password-wrong').innerHTML = 'Please Check a Username and Password'
} else {
    if (userName == 'admin') {
        if (password == '123') {
                setTimeout(()=>{
        // re dir
        window.location = './shop.html'
    },1500)
        } else {
            document.getElementById('password-wrong').innerHTML = 'Please Check a Password.'
        }
    } else {
        document.getElementById('user-name-wrong').innerHTML = 'Please Check a Username.'
    }}

}

     
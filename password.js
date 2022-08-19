let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');
let result = document.querySelector('.passwordCheck');
let password = document.querySelector('.password');


function checkPasssword () {
if(password2.value.length != 0){
    if(password1.value == password2.value){
        result.innerText='Password match';
        result.style.color = "green";
        password1.style.borderRightColor = "green";
        password1.style.borderBottomColor = "green";
        password2.style.borderBottomColor = "green";
        password2.style.borderRightColor = "green";
    }
    else{
        result.innerText='Password do not match';
        result.style.color = "red";
        password1.style.borderRightColor = "red";
        password1.style.borderBottomColor = "red";
        password2.style.borderBottomColor = "red";
        password2.style.borderRightColor = "red";
    }
}
}

password1.addEventListener('keyup', () => {
    if(password2.value.length != 0) checkPasssword();
})

password2.addEventListener('keyup', checkPasssword);


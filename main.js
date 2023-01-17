'Use strict'
const btn = document.querySelector('.btn');
const input = document.getElementsByClassName('input');
const input__err = document.getElementsByClassName('input__err');
const input__validation = document.getElementsByClassName('input__validation');
const input__errEmail = document.querySelector('.input__err--email');
const input__validationEmail = document.querySelector('.input__validation--email');
let flag = false;

btn.addEventListener('click', function() {
    let i;
    let arr = [];
    for(i = 0; i < input.length; i++) {
        if(input[i].value == '') {
            let e, t;
            input[i].placeholder = '';
            input[i].style.border = '1px solid hsl(0, 100%, 74%)';
            email_check();
            for(e = 0; e < input__err.length; e++) {
                input__err[i].style.visibility = 'visible';
            }
            for(t = 0; t < input__validation.length; t++) {
                input__validation[i].style.visibility = 'visible';
            }

        } else {
            email_check();
            input__err[i].style.visibility = 'hidden';
            input__validation[i].style.visibility = 'hidden';
            input[i].style.border = '1px solid hsl(246, 25%, 77%)';
        }

        if(input[i].value.length > 0) {
            arr.push(input[i].value);    
        }

        if(arr.length > 3 && flag == true) {
            location.reload();
        } 
    } 
})
 
/* email validation */
/* https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript#48651640 */
function email_check() {
    let email_checker = input[2].value;
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email_checker)) {
        flag = true;
        input__err[2].style.visibility = 'hidden';
        input__validation[2].style.visibility = 'hidden';
    } else {
        input[2].placeholder = 'email@example.com';
        input[2].classList.add('placeholder_red');
        input__err[2].style.visibility = 'visible';
        input__validation[2].style.visibility = 'visible';
    }
}
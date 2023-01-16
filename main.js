'Use strict'
const btn = document.querySelector('.btn');
const input = document.getElementsByClassName('input');
const input__err = document.getElementsByClassName('input__err');
const input__validation = document.getElementsByClassName('input__validation');


btn.addEventListener('click', function() {
    let i;
    let arr = [];
    for(i = 0; i < input.length; i++) {
        if(input[i].value == '') {
            let e, t;
            for(e = 0; e < input__err.length; e++) {
                input__err[i].style.visibility = 'visible';
            }
            for(t = 0; t < input__validation.length; t++) {
                input__validation[i].style.visibility = 'visible';
            }

        } else {
            input__err[i].style.visibility = 'hidden';
            input__validation[i].style.visibility = 'hidden';
        }

        if(input[i].value.length > 0) {
            arr.push(input[i].value);    
        }

        if(arr.length > 3) {
            location.reload();
        } 
    } 
})
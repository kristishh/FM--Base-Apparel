function inputElement(){
    let inputElement = document.querySelector('.email-section input[type="email"]');
    inputElement.style.color = 'black';
    inputElement.style.borderColor = 'var(--desaturated-red)';
    inputElement.value = '';
    let errorImg = document.querySelector('.error-img-wrapper');
    let errorMessage = document.querySelector('.error-message');
    errorImg.style.display = 'none';
    errorMessage.style.display = 'none';
    
}
function checkEmail(){
    let emailElement = document.querySelector('.email-section input[type="email"]').value;
    let errorImg = document.querySelector('.error-img-wrapper');
    let errorMessage = document.querySelector('.error-message');
    let pattern = new RegExp(/^\S+@\S+\.\S+$/);
    if(pattern.test(emailElement) == false){
        errorImg.style.display = 'block';
        errorMessage.style.display = 'block';
    } else {
        emailElement = '';
    }
}
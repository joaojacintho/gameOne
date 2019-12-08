var createAccount = document.querySelector('#createAccount')
var makeLogin = document.querySelector('#makeLogin')
var formSignUp = document.querySelector('#formSingUp')
var formSignIn = document.querySelector('#formSignIn')

createAccount.addEventListener("click", () => {
    formSignUp.classList.remove('form-invisible')
    formSignIn.classList.add('form-invisible')
})

makeLogin.addEventListener("click", () => {
    formSignUp.classList.add('form-invisible')
    formSignIn.classList.remove('form-invisible')
})
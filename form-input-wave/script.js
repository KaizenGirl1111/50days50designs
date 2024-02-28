const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

const signup = document.getElementById('signupBtn')
const signIn = document.getElementById('loginBtn')
const loginForm = document.getElementById('LoginForm')
const signupForm = document.getElementById('signupForm') // Change ID to match the case
const button = document.getElementById('btn')

signup.addEventListener('click', () => {
    signup.classList.remove('not-active')
    signIn.classList.add('not-active')
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    button.innerText = "Register";

})
signIn.addEventListener('click', () => {
    signIn.classList.remove('not-active')
    signup.classList.add('not-active')
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    button.innerText = "Login";
})

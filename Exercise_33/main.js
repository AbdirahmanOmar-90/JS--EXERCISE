const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const h1 = document.querySelector('h1')

function kanBadalAdiga() {
  text.textContent = `Welcome to the dom`
  btn.textContent = `wan badalay`
  btn.classList.add('myBtn')
  h1.classList.add('domkaColorkaKabadal')
}

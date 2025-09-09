const hambergur = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

hambergur.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hambergur.classList.toggle('open')
})
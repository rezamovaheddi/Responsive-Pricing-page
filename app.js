const hambergur = document.getElementById('hamburger')
const menu = document.getElementById('menu')

hambergur.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hambergur.classList.toggle('open')
})
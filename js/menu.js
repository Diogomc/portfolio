const buttonMenu = document.querySelector('.menu-button');
const nav = document.querySelector('.ul-menu');

function mobileMenu(){
    const nav = document.querySelector('.ul-menu');
    nav.classList.toggle('menu-off')
}
buttonMenu.addEventListener('click', mobileMenu)





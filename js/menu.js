const buttonMenu = document.querySelector('.menu-button');
const drop = document.querySelector('.drop')
function mobileMenu(){
    const nav = document.querySelector('.ul-menu');
    nav.classList.toggle('menu-off')
}

buttonMenu.addEventListener('click', mobileMenu)





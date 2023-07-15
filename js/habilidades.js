const hab = document.querySelectorAll('.knows');
const textDescription = document.querySelector('.textDescription');
const titleDescription = document.querySelector('.mouse-title')
const aboutLanguage = [
    
    '<h1>Java</h1><p>O Java é uma linguagem multiplataforma, orientada a objetos.</p>',
    '<h1>JAVASCRIPT</h1><p>O Javascript é uma das principais linguagens de programação utlizada atualmente.</p>',
    '<h1>HTML</h1><p>O Html é uma linguagem de marcação utlizada para estruturação de sites.</p>',
    '<h1>CSS</h1><p>O Css é uma linguagem de folhas de estilo, utilizada basicamente para dar estilo a componentes.</p>',
    '<h1>SASS</h1><p>O Sass é um pré-processador do Css.</p>',
    '<h1>GIT</h1><p>O Git é um sistema de controle de versão.</p>',
    '<h1>GITHUB</h1><p>O Github é uma plataforma de hospedagem de código fonte.</p>',
]


hab.forEach((element, event)=>{
    let evento = event
    element.addEventListener('mouseover',(event)=>{
        textDescription.innerHTML = `<p>${aboutLanguage[evento]}<p>`
        titleDescription.innerHTML = ''
    })
    element.addEventListener('mouseout', ()=>{
        textDescription.innerHTML = ''
        titleDescription.innerHTML = '<- Passe o mouse em algum ícone'
    })

})

const scrollButton = document.querySelector('.scroll');

function topSite(){
    window.scrollTo(0, 0)
}

function topSiteDisplay(){
    if(window.scrollY === 0){
       scrollButton.style.display = 'none'
    }else{
        scrollButton.style.display = 'block'
    }
}
scrollButton.addEventListener('click', topSite)
window.addEventListener('scroll', topSiteDisplay)
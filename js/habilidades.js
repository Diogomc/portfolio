const html = document.querySelector('.html');
const littleText = document.querySelector('.none')
const css = document.querySelector('.css')
const js = document.querySelector('.js')
const sass = document.querySelector('.sass')
const git = document.querySelector('.git')
const github = document.querySelector('.github')
function htmlText(){
    if(littleText.classList != 'w'){
        littleText.classList.add('textDescription')
        littleText.style.display = 'block'
        littleText.innerHTML = 'Html é uma linguagem de marcação'
    }
}
html.addEventListener('click', htmlText)

function cssText(){
    if(littleText.classList != 'w'){
        littleText.classList.add('textDescription')
        littleText.style.display = 'block'
        littleText.innerHTML = 'Css é uma linguagem de estilização'
    }
}
css.addEventListener('click', cssText)

function jsText(){
    if(littleText.classList != 'w'){
        littleText.classList.add('textDescription')
        littleText.style.display = 'block'
        littleText.innerHTML = 'Javascript é uma linguagem de programação orientada a objetos'
    }
}
js.addEventListener('click', jsText)
function sassText(){
    if(littleText.classList != 'w'){
        littleText.classList.add('textDescription')
        littleText.style.display = 'block'
        littleText.innerHTML = 'Sass é como se fosse um complemento do css'
    }
}
sass.addEventListener('click', sassText)
function gitText(){
    if(littleText.classList != 'w'){
        littleText.classList.add('textDescription')
        littleText.style.display = 'block'
        littleText.innerHTML = 'Git é um controle de sistema de versões'
    }
}
git.addEventListener('click', gitText)
function githubText(){
    if(littleText.classList != 'w'){
        littleText.classList.add('textDescription')
        littleText.style.display = 'block'
        littleText.innerHTML = 'Git hub é uma plataforma de hospedagem de código fonte'
    }
}
github.addEventListener('click', githubText)
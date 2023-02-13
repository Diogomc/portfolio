const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');
const sass = document.querySelector('.sass');
const git = document.querySelector('.git');
const github = document.querySelector('.github');
const none = document.querySelector('.none')

function removeText(){
    none.innerHTML = '';
}


function htmlText(){
    none.innerHTML = '<p>Html é uma linguagem de marcação, capaz de criar a estrutura de um site</p>'
    none.classList.add('textDescription')
}
function cssText(){
    none.innerHTML = '<p>Css é uma linguagem de estilização</p>'
    none.classList.add('textDescription')
}
function jsText(){
    none.innerHTML = '<p>Javascript é uma linguagem de programação orientada a objetos</p>'
    none.classList.add('textDescription')
}function sassText(){
    none.innerHTML = '<p>O sass é uma linguagem de folhas de estilo, é como se fosse um complemento do css</p>'
    none.classList.add('textDescription')
}function gitText(){
    none.innerHTML = '<p>O git é um software de versionamento de código</p>'
    none.classList.add('textDescription')
}function githubText(){
    none.innerHTML = '<p>O github é uma website com a finalidade de armazenar códigos fonte</p>'
    none.classList.add('textDescription')
}

html.addEventListener('mouseover', htmlText)
html.addEventListener('mouseout', removeText)

css.addEventListener('mouseover', cssText)
css.addEventListener('mouseout', removeText)


js.addEventListener('mouseover', jsText)
js.addEventListener('mouseout', removeText)

sass.addEventListener('mouseover', sassText)
sass.addEventListener('mouseout', removeText)

git.addEventListener('mouseover', gitText)
git.addEventListener('mouseout', removeText)

github.addEventListener('mouseover', githubText)
github.addEventListener('mouseout', removeText)
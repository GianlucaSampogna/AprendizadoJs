const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const cor = estiloBody.backgroundColor

console.log(cor)

for (p of ps){
    p.style.backgroundColor = cor
    p.style.color = '#FFF'
}

console.log(ps)
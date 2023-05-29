// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}
// ]

// function criaMsg(lista){
//     console.log(lista)
//     let msg = '';
//     for(i=0; i<lista.length; i++){
//         msg += `<${lista[i].tag}> ${lista[i].texto} </ ${lista[i].tag}>`
//     }
//     return msg
// }

// function escreve(msg){
//     let res = document.querySelector('.container');
//     res.innerHTML += msg;
// }

// escreve(criaMsg(elementos))


const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

function criaMsg(lista){
    let msg = [];
    for(i=0; i<lista.length; i++){
        msg.push([lista[i].tag, lista[i].texto])
    }
    console.log(msg)
    return msg
    
}

function escreve(lista){
    let container = document.querySelector('.container');
    for(i=0; i<lista.length; i++){
        let [tag, texto] = lista[i]

         elementTag = document.createElement(tag)
         elementTag.innerHTML = texto
         container.appendChild(elementTag)

    }
}


escreve(criaMsg(elementos))
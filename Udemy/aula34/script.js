function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function tiraSubmit(evento){
        evento.preventDefault();

        nome = form.querySelector('.nome');
        sobrenome = form.querySelector('.sobrenome');
        altura = form.querySelector('.altura');
        peso = form.querySelector('.peso');

        pessoas.push(nome.value, sobrenome.value, altura.value, peso.value)
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value} </p>`;
    }
    form.addEventListener('submit', tiraSubmit)
}

meuEscopo();
escreve(DataString())

function DataString(){
    const listaDatas = getDate()
    const diasemana = parseDiaSemana(listaDatas[0])
    const dia = listaDatas[1]
    const mes = parseMes(listaDatas[2])
    const ano = listaDatas[3]
    const hora = listaDatas[4]
    const minuto = listaDatas[5]
    return (`${diasemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`)
}

function getDate(){
    const data = new Date()
    const diaSemana = data.getDay()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const lista = [diaSemana, dia,mes,ano,hora,minutos]
    return(lista)
}

function escreve(msg){
    const res = document.querySelector('#res')
    res.innerHTML = msg
}

function parseDiaSemana(num){
    switch(num){
        case 0:
            num = 'Domingo'
            break
        case 1:
            num = 'Segunda'
            break
        case 2:
            num = 'Terça'
            break
        case 3:
            num = 'Quarta'
            break
        case 4:
            num = 'Quinta'
            break
        case 5:
            num = 'Sexta'
            break
        case 6:
            num = 'Sábado'
            break
    }
    return num
}

function parseMes(num){
    switch(num){
        case 1:
            num = 'Janeiro'
            break
        case 2:
            num = 'Fevereiro'
            break
        case 3:
            num = 'Março'
            break
        case 4:
            num = 'Abril'
            break
        case 5:
            num = 'Maio'
            break
        case 6:
            num = 'Junho'
            break
        case 7:
            num = 'Julho'
            break
        case 8:
            num = 'Agosto'
            break
        case 9:
            num = 'Setembro'
            break
        case 10:
            num = 'Outubro'
            break
        case 11:
            num = 'Novembro'
            break
        case 12:
            num = 'Desembro'
            break
    }
    return(num)
}


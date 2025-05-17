const prompt = require('prompt-sync')()

//  Recebe o número de maçãs desejadas
let numApples = Number(prompt('Quantas maçãs dedeseja comprar? '))
let value = 0

// Calcula proço de acordo com a quatidade intermada
if(numApples >= 12){
    value = numApples * 0.25
    console.log(`Total compra = R$ ${value.toFixed(2)}`)
}else{
    value = numApples * 0.30
    console.log(`Total compra = R$ ${value.toFixed(2)}`)

}
const prompt = require('prompt-sync')()

let num1 = Number(prompt('Informe o primeiro número: '))
let num2 = Number(prompt('Informe o segundo número: '))

// Ordena os números em ordem crescente
if(num1 === num2){
    console.log('Valores iguais.')
}else{
    if(num1 > num2){
        console.log(`${num2}, ${num1}`)
    }else{
        console.log(`${num1}, ${num2}`)
    }
}
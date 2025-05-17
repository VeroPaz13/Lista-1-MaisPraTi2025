const prompt = require('prompt-sync')()

let num = Number(prompt('Informe um número para ver a tabuada: '))
let product = 0
// Calcula a tabuado do número informado pelo usuário de 1 a 10
for(let i = 1; i <= 10; i++){
    product = num * i
    console.log(`${num} X ${i} = ${product}`)
}
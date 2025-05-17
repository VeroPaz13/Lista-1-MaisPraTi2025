const prompt = require('prompt-sync')()

let num = Number(prompt('Informe o número que será repetido: '))

//  repete o número informado pelo usuário 10x
for(let i = 1; i <= 10; i++){
    console.log(`${i} - ${num}`)
}
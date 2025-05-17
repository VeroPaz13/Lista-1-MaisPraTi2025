const prompt = require('prompt-sync')()

let sum = 0
//  realiza a soma dos 5 números informados pelo usuário
for(let i = 1; i <= 5; i++){
    let num = Number(prompt(`Informe o ${i}º número a ser somado: `))
    sum += num
}
console.log(`TOTAL SOMA: ${sum}`)
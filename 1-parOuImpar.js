const prompt = require('prompt-sync')()
console.log("Par ou Ímpar?");

let num = Number(prompt("Informe um número:"));

// Verifica se é par ou ímpar
if(num % 2 == 0){
    console.log(`${num} é par.`)
}else{
    console.log(`${num} é ímpar.`)

}
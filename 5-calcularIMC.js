// Classificação      |    IMC (kg/m²)
// Baixo peso         |  Menor que 18,5
// Peso normal	      |  18,5 a 24,9
// Sobrepeso          |  25 a 29,9
// Obesidade Grau I	  |  30 a 34,9
// Obesidade Grau II  |  35 a 39,9
// Obesidade Grau III |  40 ou mais

const prompt = require('prompt-sync')()

let weight = Number(prompt('Informe o peso (kg): '))
let height = Number(prompt('Informe a altura (m): '))

// calcula o IMC de acordo com as informações inseridas
let imc = weight / (height * height)
imc = imc.toFixed(2)

// Classifica o IMC de acordo com o resultado obtido
if (imc < 18.5) {
    console.log(`IMC = ${imc} - Classificação: Baixo peso`);
} else if ((imc >= 18.5) && (imc <= 24.9)) {
    console.log(`IMC = ${imc} - Classificação: Peso normal`);
} else if ((imc >= 25) && (imc <= 29.9)) {
    console.log(`IMC = ${imc} - Classificação: Sobrepeso`);
} else if ((imc >= 30) && (imc <= 34.9)) {
    console.log(`IMC = ${imc} - Classificação: Obesidade Grau I`);
} else if ((imc >= 35) && (imc <= 39.9)) {
    console.log(`IMC = ${imc} - Classificação: Obesidade Grau II`);
} else {
    console.log(`IMC = ${imc} - Classificação: Obesidade Grau III`);
}
const prompt = require('prompt-sync')()

//  Guia de classificação por Idade
// | Faixa etária    | Idade (anos) |
// | --------------- | ------------ |
// | **Criança**     | 0 a 12       |
// | **Adolescente** | 13 a 17      |
// | **Adulto**      | 18 a 59      |
// | **Idoso**       | 60 ou mais   |

console.log('### Classificar pessoa de acordo com a Idade ###')
let age = Number(prompt('Informe a Idade: '))

// Classifica a Idade informada
if((age >= 0) && (age <= 12)){
    console.log(`Idade informada é de criança`)
}else if((age > 12) && (age <= 17)){
    console.log(`Idade informada é de adolescente`)
}else if((age > 17) && (age <= 59)){
    console.log(`Idade informada é de adulto`)
}else if(age < 0){
    console.log('Idade inválida')
}else{
    console.log(`Idade informada é de idoso`)
}



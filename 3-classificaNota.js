const prompt = require('prompt-sync')()

// Guia de classificação das notas
// |   Nota    | Classificação |
// | --------- | ------------- |
// | 7 a 10    | Aprovado      |
// | 5 a 6     | Recuperação   |
// | < 5       |  Reprovado    |

let grade = Number(prompt('Informe uma nota de 0 a 10: '))

// classifica a nota informada
if(grade < 5){
    console.log('Reprovado')
}else if((grade >= 5) && (grade < 7)){
    console.log('Recuperação')
}else{
    console.log('Aprovado')
}
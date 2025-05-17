const prompt = require('prompt-sync')();
let numbers = [];

// Solicita do usuário números decimais e finaliza mostrando a média desses números quando o usuário digitar 0
while (true) {
    let input = prompt('Digite um número decimal para clacular média (0 para sair e mostrar a média):');

    if (input === null) {
        break;
    }

    input = input.replace(',', '.');

    let num = Number(input);

    if (isNaN(num)) {
        console.log('Por favor, digite um número válido.');
        continue;
    }

    if (num === 0) {
        break;
    }

    numbers.push(num);
}

if (numbers.length === 0) {
    console.log('Nenhum número foi digitado.');
} else {
    let sum = numbers.reduce((acc, val) => acc + val, 0);
    let average = sum / numbers.length;
    console.log(`A média dos números digitados é: ${average.toFixed(2)}`);
}
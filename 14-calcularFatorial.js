const prompt = require('prompt-sync')()
let num = parseInt(prompt("Digite um número para calcular o fatorial:"));

// Calcula o fatorial do número informado pelo usuário
if (isNaN(num) || num < 0) {
  console.log("Por favor, digite um número inteiro positivo.");
} else {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  console.log(`O fatorial de ${num} é: ${factorial}`);
}

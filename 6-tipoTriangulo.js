const prompt = require('prompt-sync')();

let A = Number(prompt("Informe o lado A: "));
let B = Number(prompt("Informe o lado B: "));
let C = Number(prompt("Informe o lado C: "));

// Verificação se os lados formam um triângulo
if (( A < B + C) && ( B < A + C) && (C < A + B)) {
    console.log();
    console.log("Os lados formam um triângulo.");

    // Classificação do tipo de triângulo
    if ((A === B) && (B === C)) {
        console.log("Tipo: Triângulo Equilátero");
    } else if ((A === B) || (A === C) || (B === C)) {
        console.log("Tipo: Triângulo Isósceles");
    } else {
        console.log("Tipo: Triângulo Escaleno");
    }

} else {
    console.log("Os lados fornecidos NÃO FORMAM um triângulo.");
}
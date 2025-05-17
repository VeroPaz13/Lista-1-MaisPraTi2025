const quantity = 10;

let a = 0;
let b = 1;

// Mostra os 10 primeiros números da Sequência de Fibonacci
console.log("Sequência de Fibonacci (10 primeiros números):");

for (let i = 0; i < quantity; i++) {
  console.log(a);

  let next = a + b;
  a = b;
  b = next;
}

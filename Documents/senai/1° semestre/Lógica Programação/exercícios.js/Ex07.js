const prompt = require('prompt-sync')();

let saldo = Number(prompt('qual seu saldo em reais?'));

let dolar = saldo / 5.79

console.log(`quantos dólares: ${dolar}`);



const prompt = require('prompt-sync')();

console.log("=====================");
console.log("💰   MEGA-SENA    💰 ");
console.log("=====================");

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número:"));
    numeros.push(numero);
    soma += numero;

    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// Exibe os resultados
alert("Soma dos números: " + soma);
alert("Quantidade de números pares: " + pares);
alert("Quantidade de números ímpares: " + impares);
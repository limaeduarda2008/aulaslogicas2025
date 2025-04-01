const prompt = require('prompt-sync')();

// Solicitar os parâmetros
let inicio = parseInt(prompt("Digite o valor de início:"));
let fim = parseInt(prompt("Digite o valor de fim:"));
let passo = parseInt(prompt("Digite o valor de passo:"));

// Laço for que exibe o valor atual a cada iteração
for (let i = inicio; i <= fim; i += passo) {
    console.log("Valor atual: " + i);
}
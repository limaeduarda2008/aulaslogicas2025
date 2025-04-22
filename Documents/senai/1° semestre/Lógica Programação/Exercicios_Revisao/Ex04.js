//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas
//trabalhadas no mês. Calcule em uma nova variável e mostre o total do seu salário no referido
//mês.
const prompt = require('prompt-sync')();
let salarioHora = Number(prompt(`Quanto você ganha por hora?:  `));
let Hmes = Number(prompt(`Quantas horas você trabalha no mês?:  `));
let totalSalario = salarioHora * Hmes;

console.log(`O total do seu salário é de: ${totalSalario}`);


const prompt = require('prompt-sync')();

let qtdePares = 0;
let qtdeimpares = 0;
let somaPares = 0;
let somaImpares = 0;

while (true) {
    let num = Number(prompt('digite um número: '));

    if (num == 0) {
        break;
    }
    if (num % 2 == 0) {
    qtdePares++;     //qtdePares = qtdePares + 1 
    somaPares = somaPares + num;
    } else {
        qtdeimpares++
        somaImpares = somaImpares + num;
    }
}
console.log(`você digitou ${qtdePares} nº pares, somadas resultou em ${somaPares}`);
console.log(`você digitou ${qtdeImpares} nº pares, somadas resultou em ${somaImpares}`);
const prompt = require('prompt-sync')();

let mulheres = 0;
let homens = 0;
let totalIdadeMulheres = 0;
let totalIdadeHomens = 0;
let totalIdadeGrupo = 0;

for (let i = 0; i < 10; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    let sexo = prompt("Digite o sexo da pessoa " + (i + 1) + " (M/F):").toUpperCase();

    // Acumula as idades conforme o sexo
    if (sexo === 'F') {
        mulheres++;
        totalIdadeMulheres += idade;
    } else if (sexo === 'M') {
        homens++;
        totalIdadeHomens += idade;
    }

    totalIdadeGrupo += idade;
}
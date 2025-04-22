const prompt = require('prompt-sync')();

let sexo = prompt(`digite o sexo: `);
let altura = prompt(`digite sua altura: `);
let PFeminino = (62.1 * altura) - 44.7;
let PMasculino = (72.7 * altura) - 58;


if (sexo == 'F' ){
    console.log(`Seu peso ideal é: ${PFeminino}`);

} else if (sexo == 'M' ){
    console.log(`Seu peso ideal é: ${PMasculino}`);

} else{
    console.log(`sexo inválido`);
}
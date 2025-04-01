const prompt = require('prompt-sync')();

//operaçãoes com variáveis 

let nr1 = 7;
let nr2 = 160;
let soma = nr1 + nr2
console.log(soma)

let numero = 5
let nuMero = 1
let subtracao = numero - nuMero 
console.log(subtracao);

console.log(nr1*nr1);
console.log(nr1/nr1);
console.log(nr1**nr1);


let valor = 2500.00
let desconto = 190.00
valor = valor - desconto
console.log(`promoção Celular com R$ ${desconto} de desconto, por apenas R$ ${valor}`)

let valor2 = Number(prompt('qual o valor do celular?'));
let desconto2 = Number(prompt('qual é o desconto em %?'));
valor2 = valor2 - desconto2;
console.log(`promoção Celular com R$ ${desconto2} de desconto, por apenas R$ ${valor2}`)

//fluxograma 

let valornum = prompt('qual é o valor?');
console.log('o dobro do valor é', valornum * 2);
console.log('a metade do valor é:',valornum / 2);

//problema matemático 

let horas = 8;
let dias = 15;
let cobranca = 100;
console.log('seu valor é de ?');
console.log('o seu valor é', horas * dias * cobranca);







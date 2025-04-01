const prompt = require('prompt-sync')();

//LENDO O VALOR EM METROS
let metro = Number(prompt('quantos metros? '));

//CONVERTENDO EM CM
let cm = metro * 100 
//CONVERTENDO EM MM
let mm = metro * 1000
//CONVERTENDO EM KM
let km = metro / 1000

//EXIBINDO O VALOR
console.log(`${cm}, ${mm}, ${km}`);

//quando colocamos `` temos uma string
//${} é o conteúdo 
const prompt = require('prompt-sync')();

let nota1 = Number (prompt('digite a nota da 1ª prova:  '));
let nota2 = Number (prompt('digite a nota da 2ª prova:  ')); 

let media = (nota1 + nota2) / 2 ;

console.log(`A nota sera: ${media}`);








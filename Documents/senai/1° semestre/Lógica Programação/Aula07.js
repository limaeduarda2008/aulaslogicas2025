// operadores relacionais 
// == quer dizer igual, igualdade
// ! quer dizer diferente 
const prompt = require('prompt-sync')();

;let a = 2;
let b = 3;
console.log(a > b); //false 
console.log(a == b); //false
console.log(a != b); //true
console.log(a > 2); //false
console.log(a >= 2); //true

//if estrutura de condição muito utilizada na programação 
let tenhoIngresso = false;
if (tenhoIngresso == true) {   //false == false 
    console.log('posso entrar no show');
} else {          //se a 1ª condição for false
    console.log('estou barrado na portaria');
}

let idade = Number(prompt('qual sua idade?'));
if (idade >= 18) {
    console.log('maior de idade');
}


let idAde = Number(prompt('qual sua idade?'));
if (idAde >= 18) {
    console.log('maior de idade');
} else {
    console.log('menor de idade');
    
}

//quando for true ele entra no console 
//shift + alt + f = organiza as linhas 





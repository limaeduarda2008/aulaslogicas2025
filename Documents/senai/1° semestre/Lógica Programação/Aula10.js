const prompt = require('prompt-sync')();

let resposta = 's';

while (resposta == 's') {
    console.log('você está dentro do bloco');    
    resposta = prompt ('deseja continuar? S/N')
}

console.log('fim');

// laços de repetição (while)

let senhaSecreta = 'SENAI'

let senhaDigitada 
 while (senhaSecreta != senhaDigitada) {
    console.log('Descubra a senha secreta!');

 senhaDigitada = prompt('qual é a senha ?: ')
    
 }
 console.log('fim');

 //exemplo 3 - executando um número determinado de vezes

 let contador = 1;
 while (contador <=5 ){
    console.log(`o contador está no nº ${contador}`);
    contador = contador + 1; // cantador++

 }

 //exemplo 4 
 //posso deiaxr meu laço executando sem uma condição especifica, apenas com 
 // while (true) e encerrar o loop com o comando break 

 let total = 0;
 let qtde = 0;

 while (true) {
    let valor = Number(prompt('digite o valor do produto (0 para encerrar)'));

    if (valor == 0) {
        break;
    }else {
        total = valor + total;
        qtde = qtde++;

    }
 }
 console.log(`você comprou no total ${qtde} produtos`);
 console.log(`valor total da compra ${total.toFixed(4)}`);

 
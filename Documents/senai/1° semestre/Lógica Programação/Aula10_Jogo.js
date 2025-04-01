const prompt = require('prompt-sync')();

console.log("==============================");
console.log("🤔   JOGO DA ADIVINHAÇÃO   🤔");
console.log("==============================");

let nrSecreto = Math.floor(Math.random() * 100) + 1;
            //{vai me dar numeração do 0 ao 100}
let acertou = false;
//while = enquanto
while (acertou == false) {
    let chute = Number(prompt('Digite um número de 1 e 100: '));

    if (chute == nrSecreto ){
        console.log('Parabéns você conseguiu!!!!! Deus abençoe, gratidão🙏🙏🙏');
        acertou = true;
    } else if (chute > nrSecreto) {
        console.log(`Você chutou ${chute} tente um número 👇`);
    } else if (chute > nrSecreto){
        console.log(`Você chutou ${chute} tente um número 👆`);
        
    }
}
console.log('FIM ');


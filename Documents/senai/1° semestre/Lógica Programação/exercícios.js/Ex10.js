const prompt = require('prompt-sync')();

let km = Number(prompt('quantos km percorrido ?'));
let dias = Number(prompt('quantos dias vc alugou ?'));

let valorTotal = (km * 0.15) + (dias * 60);

console.log(`o valor total é ${valorTotal}`);

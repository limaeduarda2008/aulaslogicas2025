const prompt = require('prompt-sync')();

let preco = Number(prompt('qual é o preço?'));
let desconto = (5/100) * preco 

console.log(`o produto de ${preco}, com 5 % de desconto fica ${desconto}`)


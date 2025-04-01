const prompt = require('prompt-sync')();

let largura = Number(prompt('qual é a largura em metros ?'));
let altura = Number(prompt('qual é a altura em metros ?'));
let area = altura * largura 
let tinta = area / 2 

console.log(`a area da parede pede ${area} m^2 e você precisará de ${tinta} litros de tinta para pintar toda a parede`);






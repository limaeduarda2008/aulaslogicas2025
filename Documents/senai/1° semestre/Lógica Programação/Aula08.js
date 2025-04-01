// Estrutura condicional composta e encadeada
// Operadores lógicos
// && - E
// || - ou 
// ! - não
const prompt = require('prompt-sync')();

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // false pq 2 condição é f
console.log(a > 1 && b < 2); // false pq apenas 1 condição é v
console.log(a > 1 && b < 4); // true pq 2 condição é v
console.log(a > 1 && b < 4 && c > 4); // true pq todas condições v 
console.log(a > 1 && b < 4 && c > 5); // false 

console.log(a > 2 || b < 2); // false pq nenhuma condição é verdadeira 
console.log(a > 1 || b < 2); // true pq tenho pelo menos 1 condição é verdadeira 
console.log(a > 1 || b < 4); // true pelo menos 1 é verdadeiro 
console.log(a > 1 || b < 4 || c > 4); // true 

let altura = Number(prompt(`digite sua altura: `));
let peso = Number(prompt(`digite seu peso: `));
let imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log('Você está abaixo do peso ideal')
} else if (imc > 18.5 && imc < 24.5) {
    console.log(`você está no peso ideal`)

} else if (imc > 25 && imc < 29.9) {
    console.log(`você está de sobrepeso`)
}  

//praticando
let lado1 = Number(prompt(`digite o lado 1: `));
let lado2 = Number(prompt(`digite o lado 2: `));
let lado3 = Number(prompt(`digite o lado 3:`));

if (lado1 == lado2 && lado2 == lado3) {
    console.log(`triângulo equilátero`)

} else if (lado1 != lado2 && lado2 != lado3){
    console.log(`triângulo escaleno`)

} else {
    console.log(`o triângulo é isóceles`)
    
} 

// utilizando o ||

let valorVendas = Number(prompt(`digite o valor de vendas: `));
let horasSemanais =  Number(prompt(`digite quantas horas foram trabalhadas: `));

if (valorVendas > 5000 || horasSemanais > 40) {
    console.log(`você tem direito ao bonûs da empresa`)
    
}else {
    console.log(`não tem direito ao boûns`) 
    
}
    
let letras = prompt(`digite a letra : `);

if (letras == "a" || letras == "e" ||letras == "i" ||letras == "o" ||letras == "u" ) {
    console.log(`você tem uma vogal`);
    
} else {
    console.log(`você tem uma consonte`);
    
}  
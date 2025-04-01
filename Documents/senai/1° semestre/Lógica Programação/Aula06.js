//importando biblioteca para receber informação do usuário 
const prompt = require('prompt-sync')();

//declarando variável sem dados (undefined)
let nota;

//declarando variável com informação 
let nome = 'duda';

//reatribuindo um valor á variável nome
nome = 'roberto';
nota = 8.5;

//entrada de dados em nosso programa 
let sobrenome = prompt('digite seu sobrenome: ');
let nota1 = Number (prompt('digite a nota da 1ª prova:  '));
let nota2 = Number (prompt('digite a nota da 2ª prova:  '));

//processamentos dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto2 = `$ {nome} ${sobrenome}`;
let idade = prompt ('digite sua idade: ');
let idadeNumero = parseInt(idade);

//saída dos dados
console.log('---relatório final---');
console.log(`o seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log('o seu nome é: ' + nomeCompleto + '\n sua idade' + idade);
console.log(`sua média é: ${media} `);

let n = 0;    //0
n = n + 1;   //1
n = n + 1;  //2
n = n + 1; //3 
n += 1;   //4
n++;     //5 (n++ = incremento)
n+= 3   //8  (n+, n-, n*, n/)
n--;        //7
n = n - 1; //6
n-= 2;    //4 

//problema matemático (aula anterior)
let horas = 8;
let dias = 15;
let cobranca = 100;
console.log('seu valor é de ?');
console.log('o seu valor é', horas * dias * cobranca);


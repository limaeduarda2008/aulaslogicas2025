const prompt = require('prompt-sync')();

//criando nossa primeira variável
// uma variável serve para armazenar uma informação/valor
//o memória crie um espaço com  nome CURSO e receba (=) 'desenvolvimento de sistemas'
var curso = "desenvolvimento de sistemas"; 
//var IDADE 
console.log('curso'); //para imprimir uma variável não se coloca entre " "
console.log(curso); //jeito correto de usar uma variável 
console.log('curso', curso);
var idade = 16; //inteira //interagir
var temperatura = 24.5; //real // float
var nome = 'lima'; //string
  
console.log('olá', nome, 'voce tem', idade, 'anos');
console.log('voce esta com', temperatura, 'graus', 'voce ta cursando', curso);

console.log('olá' + nome + 'voce tem'+ idade+ 'anos');
console.log('voce esta com'+ temperatura+ 'graus'+ 'voce esta cursando'+ curso);

console.log('olá, ${nome}, você tem, ${idade} anos')
console.log('você esta com, ${temperatura}, graus, você esta cursando, ${curso}');

//declarando uma variável lógica/boolean/boleano (true/false)

var podeDirigir = true;
var estaChovendo = false;

//declarando uma variável nula

var escola;
//para dar nomes as variáveis, sempre começar com maiúsculo ou minúsculo ou _ 
//não pode ter espaço, nem ser uma palavra reservada (as que ja tem comando)
//nomes de variáveis válidos (Nota1, )
//let e var tem a mesma função 

let cidade = 'Rio Preto'
var turma = '2° B'
const ano = 2025

console.log(turma);
turma = '3°B' //reatrbuindo o valor de uma variável
console.log(turma); 
//ano = 2026; //não podemos reatribuir valor a uma constante 

let _nome = 'lima'  //string
let _idade = 16    //number
let _peso = 60.9  //number
console.log(_nome, _idade, 'anos', _peso, 'kg');

let _mae = 'Cristina'
let _pai = 'téofilo'
let _irma = 'fernanda'
console.log(_mae, _pai, _irma);

//mostrando no console quais são os tipos dos dados
console.log(typeof _nome, typeof _idade, typeof _peso);
console.log(typeof _nome, typeof _idade, typeof _peso);

//no prompt o computador espera o usuario digitar uma informação
//sempre quando recebemos uma informação de entrada ela vem em STRING
_nome = prompt('qual é o nome?');       //string
_idade = prompt('qual é sua idade?');  //string
_peso = prompt('qual é seu peso?');   //string
console.log(_nome, _idade, _peso)

//criem 2 variaveis num1 e num2 e recebam as informações pelo prompt
let num1 = prompt ('digite uma n°');
let num2 = prompt ('digite outro n°');

console.log(num1 + num2);

console.log(typeof num1); //string
num1 = Number(num1);     //convertendo a variavel do tipo string para Number
console.log(typeof num1); //number

//receber uma informação já convertendo seu tipo de dados 
let nr1 = Number(prompt('digite o primeiro n°:'));
let nr2 = Number(prompt('digite o segundo n°:'));
console.log(nr1 + nr2);

//convertendo os dados de uma variável
nr1 = "100.14";                 //string
nr1 = Number("100.14");        //convertendo String para Number
nr1 = parseInt("100.14");     //convertendo String para integer
nr1 = parseFloat("100");     //convertendo String para float
nr1 = String(100.14);       //convertendo String number para String 

_nome = prompt('qual é o nome?');                   //string  
_idade = parseInt (prompt('qual é sua idade?'));   //int
_peso = parseFloat (prompt('qual é seu peso?'));  //float
console.log(_nome, _idade, _peso)


//execercícios de variáveis:

let nomeAluno = 'jéssica';
let alTura = 160;
let ano_atual = 2025

let nomeProfessor = prompt('digite o nome do professor');
let materia = prompt('digite a materia');
let anoIngressado = parseInt('ano de ingresso');

nomeAluno = prompt('digite o nome');
escola = prompt('digite a escola');
ano_atual = parseInt(prompt('digite ano atual'));

//padrões de escrita
//camelCase 
//PASCALCASE (primeiras letras maiúsculas)
//snake_case (ao invés de dar espaço, usamos o _ )

//exercício
//Nota1 válido
//nomeCompleto válido
//Nome Completo inválido
//Média inválido
//console inválido 
//_salario válido
//9dade inválido
//Minha_Variavel válido
//var inválido
//valor$ inválido
//nome-completo inválido
//escola_ válido
//TELEFONE válido
//true inválido


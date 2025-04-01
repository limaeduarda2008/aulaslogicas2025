//variáveis Compostas / Vetores / Arrys
//Em uma variável simples, é possivel armazenar apenas uma infrmação por vez 

//variável simples 
let fruta = 'maçã';
//alterou o conteúdo da variável 
fruta = 'banana';

//variáveis compostas 
//em uma variável composta é possivel armazenar mais de um dado em uma única variável
let frutas = ['maçã', 'banana', 'abacaxi', 'uva', ];

console.log(frutas);
console.log(frutas[1]);

//declarando uma lista vazia = para adicionar dados de pouco em pouco
let listaVazia = []

//declaração de uma lista de números 
let numeros = [1, 2, 8, 5, 9];

//declaração de uma lista de strings 
let nomes = ['Barbosa', 'Messias', 'Duda'];

//declaração de uma lista mista 
let listaMista = [4, 'arroz', true, 7.55];

//declarção de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot-dog'], [5.00, 10.00]] 
console.log(listaDeVetores[0][1]);

console.log(frutas);
//alertando o conteúdo de um item da lista 
frutas[3] = 'melancia';
console.log(frutas);

//inserindo um novo item na lista 
frutas.push('laranja'); 
frutas.splice(2, 0, 'morango');
//  2 - posição 
//  0 - quantidade de itens a serem removidos 

//excuindo itens da lista 
frutas.splice(3, 1); 
// 3 - posição
// 1 - quantidae de itens a serem removidos 
frutas.shift();
frutas.pop(); //remove

frutas = ['maçã', 'banana', 'morango', 'abacaxi', 'melancia', 'laranja', 'uva'];
console.log(frutas[4]);
console.log(frutas(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);

//ordenando lista em ordem crescente 
frutas.sort()
console.log(frutas);

//ordenando lista em ordem decrescente
frutas.reverse()
console.log(frutas);




//ciação da função
function Linha(){
   console.log('----------------');
}
//chamamos a função 
Linha();
console.log('SESI / SENAI');

//sem parametro e sem retorno
function Cabecalho(){
    Linha();
    console.log('       SESI / SENAI');
    Linha();
}
Cabecalho

//parametros porém sem retorno
function cabecalhoEscola(nomeEscola){
    Linha();
    console.log(nomeEscola);
    Linha();
}
cabecalhoEscola('USP');
cabecalhoEscola('UNICAMP');

//ensinando a somar
function soma (nr1, nr2){
  let resultado = nr1 + nr2;
  console.log(resultado);

}

soma (5, 8);

//retorno de uma função (com parameto e retorno)
function media(n1, n2){
  let resultado = (n1 + n2) / 2;
  return resultado;
}

let valor = media(5, 8);

//
let palavra = 'SENAI';
let palavraCriptografada = criptografer(palavra);


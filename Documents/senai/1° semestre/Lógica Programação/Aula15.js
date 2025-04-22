//escopo de variáveis
//variável global pode ser acessada em qualquer lugar 
//variável local só pode ser acessada dentro do bloco
function NomeEscola(){
    console.log(`valor dentro da função: ${escola}`);
    
}
let escola = 'SENAI';
console.log(`valor fora da função: ${escola}`);
NomeEscola();
console.log(`valor após a função: ${escola}`);


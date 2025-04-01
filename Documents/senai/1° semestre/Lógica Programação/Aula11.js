// estrutura de laço de repetição for
const prompt = require('prompt-sync')();

//inicialização da variável ; condição do for ; incremento da variável
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
    
}
console.log('fim ');

// do 5 ao 50
for (let contador = 5; contador <= 50; contador++) {
    console.log(contador);
    
}
console.log('Fim ');

//soma de de 3 em 3, iniciando a partir do número 5. 
for (let contador = 5; contador <= 50; contador+= 3) {
    console.log(contador);
    
}
console.log('Fim ');

//utilizando o break para parar o for
for (let contador = 1; contador <= 500; contador++) {
    console.log(contador);
    if (contador == 50){
        break;
    } 
    
}


//entregando notebooks
console.log('Entregando os Notebooks');

    for (let nr = 1; nr <= 32; nr++) {
        let nome = prompt(`Quem é o nº ${nr}: `);
        let presente = prompt(`O(A ${nome} está presente (s ou n)?: `);

        if (presente == "S"){
            console.log(`Pegar o notebook ${nr}` );
            console.log(`Levar o notebook até o(a) ${nome}`);
            
        } else {
            console.log(`não pegar o notebook ${nr}` );
            
        }
    }
   
//tabuada com FOR 
let nr = 6;
for (let contador = 1; contador <=10; contador++){
    console.log(`${nr} X ${contador} = ${nr * contador}`);
    
}    



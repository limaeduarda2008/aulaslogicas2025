//estruturas condicionais alinhadas
//switch case

const prompt = require('prompt-sync')();

let valorCompra = 120; 
let clienteVIP = true;

if (valorCompra >= 100){
    if (clienteVIP == true){  //!clienteVIP = false
        console.log(`você ganhou R$ ${valorCompra * 0.1}`);
        
    } else {
        let desconto = valorCompra * 5 / 100;
        console.log(`você ganhou R$ ${desconto} de desconto`);
        
    }

} else {
    let restante  = valorCompra - 100;
    console.log(`compre mais R$ ${restante} e ganhe desconto`);
    
}

//resolvendo problema 
let idade = Number(prompt(`digite sua idade: `));

if ( idade > 70){
    console.log(`seu voto é facultativo`);
    
} else if (idade < 16){
    console.log(`você não pode votar`);
    
} else if (idade > 16 && idade < 18){
    console.log(`seu voto é facultativo`);
    
} else if (idade == 18 || idade <= 70){
    console.log(`seu voto é obrigatório`);
}



//desafio (não é da aula)
let roupa =  prompt(`digite a cor da sua roupa: `);

if (roupa == "vermelho"){
    console.log(`você está namorando`);

} else if (roupa == "verde"){
    console.log(`você está solteiro`);
    
} else if (roupa == "amarelo"){
    console.log(`você está ficando`);
    
} else {
    console.log(`você não pode entrar na festa, kiss kiss`);
}
    
    
    // Switch Case é uma alternativa ao if else
    let n1 = Number(prompt(`digite um número: `));
    let n2 = Number(prompt(`digite outro número: `));
    let op = prompt(`digite o operador (+ - / * **): `);

    switch (op) {
 case `+`:                     // if (op == `+`)
        console.log(n1 + n2);  
        break;
 case `-`: 
        console.log(n1 - n2);      // else if (op == `-`)
        break;
 case `/`: 
        console.log(n1 / n2);        // else if (op == `/`)
        break;
 case `*`: 
        console.log(n1 * n2);          // else if (op == `*`)
        break;
 case `**`: 
        console.log(n1 ** n2);         // else if (op == `**`)
        break;
 default:
    console.log(`operador inválido`);    // else (default)
           
 }


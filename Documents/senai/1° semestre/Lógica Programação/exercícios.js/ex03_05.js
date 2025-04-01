const prompt = require('prompt-sync')();

let nota1 = Number(prompt(`digite sua 1º nota: `));
 let nota2 = Number(prompt(`digite sua 2º nota: `));

 let media = (nota1 + nota2) / 2;

 if (media >= 7){
    console.log(`você está aprovado`);
    
} else if (media == 5 && media == 6 && media <= 7 ){
    console.log(`você está de recuperção`);
    
} else {
    console.log(`você está reprovado`);
}

const prompt = require('prompt-sync')();

let salario = Number(prompt(`digite o salário: `));
let reajuste;

if (salario <=  2000) {
    reajuste = salario * 0.12;
    console.log(`O salário reajustado é R$ ${reajuste}`)
    
} else if (salario > 2000 && salario <= 4000){ 
    reajuste = salario * 0.1;
    console.log(`O salário reajustado é R$ ${reajuste}`)
}  else if (salario > 4000){
    reajuste = salario * 0.08
    console.log(`O salário reajustado é R$ ${reajuste}`);
    
}



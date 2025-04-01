const prompt = require('prompt-sync')();

let vendeu = Number(prompt('quanto ele vendeu?:  '));
let conta1 

if (vendeu > 5000){
    conta1 = vendeu * 0.05;
    console.log(`sua comissão é de 5 %, que será ${conta1}`);
    
}
else {
    conta1 = vendeu * 0.03;
    console.log(`sua comissão é de 3 %, que será ${conta1}`);
    
}
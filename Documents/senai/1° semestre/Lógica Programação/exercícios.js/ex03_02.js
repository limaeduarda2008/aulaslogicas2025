const prompt = require('prompt-sync')();


 let anoAtual = Number(prompt(`digite o ano atual: `));
 let nascimento = Number(prompt(`digite o ano que você nasceu: `));
 

 if (nascimento >= 2015  ){
    console.log(`você é criança`);
    
} else if (nascimento <= 2014 && nascimento >= 2008 ){
    console.log(`você é adolescente`);
    
} else if ( nascimento <= 2007 && nascimento >= 1966 ){
    console.log(`você é adulto`);
    
} else{
    console.log(`você é idoso`);
    
}





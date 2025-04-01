const prompt = require('prompt-sync')();

let idade = Number(prompt('qual é sua idade?:  '));


if ( idade >= 18 )(console.log('é maior de idade'))


else {
    console.log('é menor de idade ')
}
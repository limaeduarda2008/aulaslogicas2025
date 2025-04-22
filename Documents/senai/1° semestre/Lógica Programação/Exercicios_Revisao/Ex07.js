const prompt = require('prompt-sync')();

function calcularSalario() {
  let valorH = prompt('Quanto você ganha por hora?:  ');
  let hTrabalhadas = prompt('Quantas horas você trabalha no mês?: ');

  valorH = parseFloat(valorH);
  hTrabalhadas = parseFloat(hTrabalhadas);

  let salarioBruto = valorH * hTrabalhadas;

  let descontoIR = salarioBruto * 0.11;        // Imposto de Renda
  let descontoINSS = salarioBruto * 0.08;      // INSS
  let descontoSindicato = salarioBruto * 0.05; // sindicato

  let salarioLiquido = salarioBruto - descontoIR - descontoINSS - descontoSindicato;

  console.log("💸💸Folha de Pagamento💸💸");
  console.log("Salário Bruto: R$ " + salarioBruto);
  console.log("Desconto IR (11%): R$ " + descontoIR);
  console.log("Desconto INSS (8%): R$ " + descontoINSS);
  console.log("Desconto Sindicato (5%): R$ " + descontoSindicato);
  console.log("Salário Líquido: R$ " + salarioLiquido);
}

calcularSalario();
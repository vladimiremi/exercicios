const lerlinha = require("readline-sync")

function calcular(numero1, operacao, numero2){
  if(operacao === "+"){
     return numero1+numero2
  } else if(operacao === "-"){
     return numero1-numero2
  } else if(operacao === "*"){
     return numero1*numero2
  } else if(operacao === "/"){
     return numero1/numero2
  }
}

let valor1 = Number(lerlinha.question("Digite o valor 1:"))
while (typeof valor1 !== "number" || !valor1) {
   valor1 = Number(lerlinha.question("Digite  um valor válido:"))

}

let op = lerlinha.question("Digite a operação:");
function verificarSeOperacaoEValida(operacao){
   if(operacao === "+"){
     return true
  } else if(operacao === "-"){
     return true
  } else if(operacao === "*"){
     return true
  } else if(operacao === "/"){
     return true
  } else{
     return false
  }
}
let operacaoEValida = verificarSeOperacaoEValida(op)
while (!operacaoEValida) {
    op = lerlinha.question("Digite  operação válida:\nex: (+, -, *, /)");
    operacaoEValida = verificarSeOperacaoEValida(op)
}

let valor2 = Number(lerlinha.question("Digite o valor 2:"))
while (typeof valor2 !== "number" || !valor2) {
   valor2 = Number(lerlinha.question("Digite  um valor válido:"))

}

const resultado =  calcular(valor1, op, valor2)
console.log(`${valor1} ${op} ${valor2} = ${resultado}`);


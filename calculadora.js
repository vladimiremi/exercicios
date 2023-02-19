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
  
  console.log("você não digitou uma operação inválida");
}


let valor1 = Number(  lerlinha.question("Digite o valor 1:"))

console.log(typeof valor1, valor1)

while (typeof valor1 !== "number" || !valor1) {
   valor1 = Number(     lerlinha.question("Digite  um valor válido:"))

}


let op = lerlinha.question("Digite o valor da operação:");

// console.log(op)

// while (op !== "+" || op !== "-" || op !== "/" || op !== "*") {
//    let op = lerlinha.question("Digite  operação válida:");
//   console.log()
// }




let valor2 = Number(  lerlinha.question("Digite o valor 2:"))


while (typeof valor2 !== "number" || !valor2) {
   valor2 = Number(     lerlinha.question("Digite  um valor válido:"))

}


console.log(calcular(valor1, op, valor2));


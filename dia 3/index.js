let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Qual é seu nome?")
idade = parseInt(prompt("E a sua idade?"))
altura = parseFloat(prompt("Muito bem agora, qual a sua altura?"))
peso = parseInt(prompt("Pra finalizar,qual seu peso?"))

let anoDeNascimento = 0
anoDeNascimento = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá "+ nome +"!,voce tem " + idade + " anos,nasceu em "+ anoDeNascimento+",pesa "+ peso + "kg,e seu IMC é " + imc + "kg/m2")

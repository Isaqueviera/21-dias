let nome = ''
let idade = 0
let temCarta = ''
let carro = ''

nome = prompt ('Olá,Qual o seu nome?')
idade = Number(prompt ('E a sua idade?'))
temCarta = prompt ('Possui carta de motorista?')
carro = prompt ('Tem algum carro?')
maiorDeIdade = 18

if( idade > maiorDeIdade && carro === temCarta){
    console.log('parabens ' + nome + ',você será o motorista')
}else if (maiorDeIdade > idade || 'nao' === temCarta){
    console.log(+'Infelizmente' + nome + ',você não pode dirigir')
} else{
    console.log('você pode dirigir mas não tem carro')
}

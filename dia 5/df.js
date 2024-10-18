let valor 
let quantidade 
let opçao = prompt('Bem vindo ao posto, você gostaria de \n1-abastecer com gasolina:\n2-abastecer com alcool:  \n3-calibrar os pneu:')

switch(opçao){
      case '1':
         valor = parseInt(prompt('Qual o valor?'))
         quantidade = valor / 5
         console.log('foram abastecido ' + quantidade + ' L de gasolina')
        break
      case '2':
         valor = parseInt(prompt('Qual o valor?'))
         quantidade = valor / 3
         console.log('Foram abastecido ' + quantidade + ' L  de gasolina')
        break
      case '3':
         console.log('Pneus calibrados com sucesso!')
        break

}
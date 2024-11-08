let modeloCarro = []  
let anoDoModelo = []  
let preço = []        
let continuar = true   
let cons = 0          


while(continuar){
   let modelo = prompt('Cadastre um novo carro com seu modelo:')
   let ano = Number(prompt('ano:'))
   let valor = parseFloat(prompt('valor:'))
   let desejaContinuar = prompt('Deseja continuar? (s/n)')
   
   
   modeloCarro[cons] = modelo
   anoDoModelo[cons] = ano
   preço[cons] = valor
   cons++
   
   
   if(desejaContinuar !== 's')
      continuar = false 
}


console.log('Carros cadastrados:')
for(let i = 0; i < modeloCarro.length; i++){
   console.log(modeloCarro[i] + ' - ' + anoDoModelo[i] + ' - ' + preço[i].toFixed(2) + ' R$')
}


for(let b = 0; b < preço.length - 1; b++){
   for(let j = 0; j < preço.length - b - 1; j++){
      if(preço[j] > preço[j + 1]){
         
         let tempPreco = preço[j]
         preço[j] = preço[j + 1]
         preço[j + 1] = tempPreco

         
         let tempModelo = modeloCarro[j]
         modeloCarro[j] = modeloCarro[j + 1]
         modeloCarro[j + 1] = tempModelo

         
         let tempAno = anoDoModelo[j]
         anoDoModelo[j] = anoDoModelo[j + 1]
         anoDoModelo[j + 1] = tempAno
      }
   }
}


console.log('Carros ordenados pelos preços:')
for(let i = 0; i < modeloCarro.length; i++){
   console.log(modeloCarro[i] + ' - ' + anoDoModelo[i] + ' - ' + preço[i].toFixed(2) + ' R$')
}

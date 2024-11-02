
function Calculadora(num1,num2,operador){
    
}

let num1 = 0
let num2 = 0
let resultado
operador = ''

switch( operador ){
   case('+'):
        console.log(num1 + num2)
        break
   case('-'):
        console.log(num1 - num2)
        break
   case('x'):
        console.log(num1 * num2)
        break 
   case(operador === '÷'):
        console.log(num1 / num2)  
        break
   case('e'):
       let contador = 1
       resultado = num1 * num2
       while(contador < num2 - 1){
            resultado = resultado * num1contador++
       }
       break
       
 if(resultado == undefined || resultado > 1000000)
    resultado ='ERRO'
    
    return resultado
 
 }


 
    
 
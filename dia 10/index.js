let numero = parseInt(prompt('Escolha um número inteiro:'))
let fibo = []
fibo[0] = numero - 1
fibo[1] = numero

for (let nu = 2; nu < 10; nu++) {
    fibo[nu] = fibo[nu - 1] + fibo[nu - 2]
}

console.log('Fibonacci: ' + fibo.join(', '))


    

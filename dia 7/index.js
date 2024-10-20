let saldo = 1000
let maiorValor = 0
let somaValores = 0
let total = 0
let continuar = false

do{
    let nome = prompt('Qual seu nome: ')
    let cpf = Number(prompt('seu cpf:'))
    let operecao = prompt('Qual a operação deseja fazer S / D:')
    let valor = prompt('Qual seria o valor:')

    if(valor < 0){
        console.log('Valor invalido. Transação não foi realizada.')
    }
    if(operecao === 'D' && valor > saldo){
        console.log('Valor inserido maior que saldo. Transação não realizada.')
    }
    else if(operecao === 'S'){
        console.log('olá,' + nome + 'seu saldo disponivel é ' + saldo + '.')
        saldo -= valor
        total++
        somaValores += valor
        if(valor > maiorValor){
            maiorValor = valor
        }
        console.log('Transação realizada com sucesso. seu saldo atual é R$' + saldo + '.')
    } else{
        console.log('olá,' + nome + 'seu saldo disponivel é ' + saldo + '.')
        saldo -= valor
        total++
        somaValores += valor
        if(valor > maiorValor){
            maiorValor = valor
        }
        console.log('Transação realizada com sucesso. seu saldo atual é R$' + saldo + '.')
    }

        let opcao = prompt('deseja continuar? (1 para continuar, 2 para parar')
        if(opcao === 1){
        continuar = true
    }
        else if(opcao === 2){
        continuar = false
    }
        else{
            console.log('opção invalida.')
            continuar = false
        }
} while(continuar)
    console.log('Total do saldo R$' + saldo + '.')
    console.log('Maior valor inserido R$' + maiorValor + '.')
    console.log('Media dos valores inseridos R$' + somaValores / total )








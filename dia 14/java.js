let nome;
let salario;

function perguntaNomeSalario() {
    nome = prompt('Qual é seu nome?:');
    salario = parseFloat(prompt('Olá ' + nome + ', Qual seria sua média salarial?:'));
    calculaSalario(salario, nome);
}

function calculaSalario(salario, nome) {
    let aumento = 0;
    if (salario <= 1500) {
        aumento = 0.2;
    } else if (salario <= 2000) {
        aumento = 1.15;
    } else if (salario > 2000 && salario <= 3000) {
        aumento = 1.10;
    } else {
        aumento = 1.05;
    }

    let novoSalario = salario * aumento;
    
    console.log('Nome do empregado: ' + nome);
    console.log('Salário R$' + salario.toFixed(2));
    console.log('Aumento: ' + (aumento - 1) * 100 + '%');
    console.log('Novo salário: R$' + novoSalario.toFixed(2));

    perguntaNovamente();
}

function perguntaNovamente() {
    let resposta = prompt('Deseja calcular novamente? (s/n)');
    if (resposta.toLowerCase() === 's') {
        perguntaNomeSalario();
    } else {
        console.log('Programa encerrado');
    }
}

perguntaNomeSalario();

       

    
    


let repetir = 'n'; 

while (repetir !== 's') {     
    let nome = prompt('Bem-vindo ao Itauisa, qual seu nome?');     
    let idade = Number(prompt('Sua idade?'));     
    let salario = parseFloat(prompt('Seu salário?'));      

    console.log('Olá ' + nome + ', você tem ' + idade + ' anos, e seu salário é de R$ ' + salario);      

    repetir = prompt('Suas informações estão certas? ("s" para continuar, "n" para redefinir)');      

    if (repetir === 's') {         
        console.log('Previsão salarial nos próximos 10 anos:');         
        let aumento = 0.015; 

        for (let ano = 1; ano <= 10; ano++) {             
            salario += salario * aumento;           
            console.log((2023 + ano) + ' = R$ ' + salario.toFixed(2));            
        }     
    } 
}

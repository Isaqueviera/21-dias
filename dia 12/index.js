let nomes = []
let senhas = []
let continuar = true

while (continuar) {
    let opção = prompt('Escolha uma das opções (cadastrar/login/excluir/encerrar):')

    switch(opção) {
        case 'cadastrar':
            let nome = prompt('Insira seu nome:')
            let senha = prompt('Sua senha:')
            nomes.push(nome)  // Adiciona o nome no array nomes
            senhas.push(senha)  // Adiciona a senha no array senhas
            console.log('Cadastro realizado com sucesso!')
            break;

        case 'login':
            let nomeLogin = prompt('Seu nome:')
            let senhaLogin = prompt('Sua senha:')
            let encontrado = false  // Variável para verificar se o login é válido

            // Verifica se o nome e a senha informados estão no array
            for (let i = 0; i < nomes.length; i++) {
                if (nomes[i] === nomeLogin && senhas[i] === senhaLogin) {
                    console.log('Bem-vindo(a)!')
                    encontrado = true
                    continuar = false  // Encerra o loop após o login bem-sucedido
                    break;
                }
            }

            if (!encontrado) {
                console.log('Nome ou senha incorretos. Tente novamente!')
            }
            break;

        case 'excluir':
            let nomeExcluir = prompt('Qual nome deseja excluir?')
            let indiceExcluir = nomes.indexOf(nomeExcluir)

            if (indiceExcluir !== -1) {
                nomes.splice(indiceExcluir, 1)  // Remove o nome do array
                senhas.splice(indiceExcluir, 1)  // Remove a senha correspondente
                console.log('Cadastro excluído com sucesso!')
            } else {
                console.log('Nome não encontrado!')
            }
            break;

        case 'encerrar':
            continuar = false
            console.log('Encerrando o programa...')
            break;

        default:
            console.log('Opção inválida, escolha outra!')
    }
}


    

    

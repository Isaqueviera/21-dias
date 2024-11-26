let nomes = [];
let senhas = [];

function opção() {
   
    let opcao = prompt('Escolha uma opção (cadastrar/excluir/sair)');
    return opcao;
}

function nomeEsenha() {
    
    let nome = prompt('Qual seu nome?');
    let senha = prompt('Qual sua senha?');
    nomes.push(nome);  
    senhas.push(senha);  
    console.log('Cadastro realizado com sucesso!');
}

function login(nome, senha) {
    
    let indice = nomes.indexOf(nome);  
    if (indice !== -1 && senhas[indice] === senha) {
        return true;
    } else {
        return false;
    }
}

function excluirLogin(nome) {
    
    let indice = nomes.indexOf(nome); 
    if (indice !== -1) { 
        nomes.splice(indice, 1); 
        senhas.splice(indice, 1);  
        console.log('Cadastro excluído com sucesso!');
    } else {
        console.log('Usuário não encontrado!');
    }
}

while (true) {
    let opcao = opção();  

    if (opcao === "cadastrar") {
        nomeEsenha();  
    } else if (opcao === "excluir") {
        let nomeExcluir = prompt('Qual nome deseja excluir?');
        excluirLogin(nomeExcluir);  
    } else if (opcao === "sair") {
        console.log("Saindo...");
        break;  
        console.log("Opção inválida! Tente novamente.");
    }
}

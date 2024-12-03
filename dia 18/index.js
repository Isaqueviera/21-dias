class Livro {
    titulo;
    autor;
    editora;
    anoDePublicacao;
    disponibilidade = true;

    constructor(titulo, autor, editora, anoDePublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoDePublicacao = anoDePublicacao;
    }
}

class Biblioteca {
    nome;
    endereco;
    telefone;
    acervo = [];

    constructor(nome, endereco, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    buscador(titulo) {
        let encontrado = this.acervo.find(livro => livro.titulo === titulo);
        if (encontrado) {
            console.log(encontrado);
        } else {
            console.log("Livro não encontrado.");
        }
    }

    emprestimoDeLivro(titulo) {
        let emprestado = false;
        this.acervo.forEach(livro => {
            if (livro.titulo === titulo && livro.disponibilidade) {
                livro.disponibilidade = false;
                emprestado = true;
            }
        });

        if (emprestado) {
            console.log("Empréstimo realizado com sucesso.");
            return true;
        } else {
            console.log("Livro não está disponível para empréstimo.");
            return false;
        }
    }

    devolverLivros(titulo) {
        let devolvido = false;
        this.acervo.forEach(livro => {
            if (livro.titulo === titulo && !livro.disponibilidade) {
                livro.disponibilidade = true;
                devolvido = true;
            }
        });

        if (devolvido) {
            console.log("Livro devolvido com sucesso!");
        } else {
            console.log("Erro: Livro não encontrado ou já está disponível.");
        }
    }
}

let livro1 = new Livro('Inteligência Emocional', 'Daniel Coleman', 'Objetiva', '1993');
let livro2 = new Livro('Pense e Enriqueça', 'Napoleon Hill', 'Dondevele', '1997');
let livro3 = new Livro('Aprendendo a Cair', 'Gustavo Alfred', 'Brpostal', '2020');

let minhaBiblioteca = new Biblioteca('Biblioteca do Dev', 'Rua 13, 234', '1399805453');
minhaBiblioteca.acervo.push(livro1, livro2, livro3);

minhaBiblioteca.buscador('Pense e Enriqueça');
minhaBiblioteca.emprestimoDeLivro('Inteligência Emocional');
minhaBiblioteca.devolverLivros('Inteligência Emocional');

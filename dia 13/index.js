class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = parseFloat(velocidadeMaxima);
        this.aceleracao = parseFloat(aceleracao);
        this.distancia = 0;
        this.resultado = 0;
    }

    calcularTempo(distancia) {
        this.distancia = distancia;
        this.resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
        return this.resultado;
    }
}

let distancia = Number(prompt('Qual a distância (em metros)?'));
let novoCarro = new Carro('BMW M4', '510 cv', '290', '3.9');
let tempo = novoCarro.calcularTempo(distancia);

alert(`O tempo estimado para percorrer ${distancia} metros com o ${novoCarro.nome} é de ${tempo.toFixed(2)} segundos.`);

    

   
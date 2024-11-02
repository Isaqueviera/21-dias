do{
let nome = prompt('Insira seu nome:');
let idade = Number(prompt('Sua idade:'));
let peso = parseFloat(prompt('Seu peso:'));
let altura = parseFloat(prompt('Agora sua altura'));
let profissao = prompt('Para terminar sua profissão:');
let alturaM = altura / 100
let dias = idade * 365 
let meses = idade * 12
let semanas = idade * 52 
let imc = parseInt(peso / (alturaM * alturaM))
let anoFinal = 2023
let anoN = anoFinal - idade

console.log('Olá ' + nome + ', voce tem ' + idade + +' pesa ' + peso + 'KG, mede ' + alturaM + 'CM e trabalhar com ' + profissao);

switch(true){
        case idade >= 18:
            console.log('Você está liberado para toma umas!');
            break
        case 18 > idade:
            console.log('Ainda está muito jovem  pra toma umas');
            break
};

console.log('Você já viveu ' + meses + ' meses , ' + semanas + ' semanas e ' + dias + ' dias' )

switch(true){
        case imc <= 18.5 :
            console.log('Seu IMC é '  + imc + 'kg/m2 ,está muito abaixo da media (magreza) ');
            break
        case imc >= 18.5 && imc <= 24.5:
            console.log('Seu imc é ' + imc + 'kg/m2 ,está na media (normal)');
            break
        case imc >= 24.5  && imc <= 29.9:
            console.log('Seu imc é ' + imc + 'kg/m2 ,está acima da media (obesidade)');
        case imc > 30:
            console.log('Seu imc é ' + imc + 'kg/m2 ,está muito acima da media (obesidade morbita)')
};

for(let anot = anoN; anot <= anoFinal ;anot++){
        let idadeu = anot - anoN
        console.log('Ano:'+ anot + '-' +'Idade:' + idadeu )
}

    continuar = prompt('Voce deseja continuar? (digite "sim" ou "não")')
} while(continuar === 'sim')

    console.log('Programa encerrado')


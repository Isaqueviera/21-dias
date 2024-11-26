let arrayA = [1, 21, 34, 55, 56, 65, 34, 23, 24, 89];
let arrayB = [22, 21, 33, 55, 56, 66, 31, 90, 67, 20];

function numerosComuns(arrayUm, arrayDois) {
    let resultado = [];

    for (let i = 0; i < arrayUm.length; i++) {
        for (let t = 0; t < arrayDois.length; t++) {
            if (arrayUm[i] === arrayDois[t]) {
                resultado.push(arrayUm[i]);
                break;  
                
            }
        }
    }

    return resultado;
}

console.log(numerosComuns(arrayA, arrayB));

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`a média é ${media.toFixed(2)}`);


let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado);
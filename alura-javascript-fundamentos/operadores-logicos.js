const notaFinal = 10;
const faltas = 2;
const advertencias = 0;

if (notaFinal < 7 || faltas > 4) {
    console.log('Reprovado, boas festas');
} else {
    console.log('Aprovado, parabéns!');
}

if ( faltas <= 2 && !advertencias) {
    console.log('Bônus de 0.5 pontos!');
} else {
    console.log('Sem bônus, continue se esforçando!');
}
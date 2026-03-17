//parâmetros/argumentos
//retorno

function exibeNomeEstudante(nome) {
    console.log(`O nome do estudante é: ${nome}`);
}

exibeNomeEstudante('Caroline');



function calculaMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

console.log(calculaMedia(8, 6.3, 7, 9.3));
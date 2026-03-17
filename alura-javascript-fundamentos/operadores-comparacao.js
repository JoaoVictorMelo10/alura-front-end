const estaAprovado = true;

 if (estaAprovado === true) {
     console.log('Parabéns, você foi aprovado!');
 }


 // deve sempre usar o operador de comparação estrita que compara tipo e valor (===) para evitar bugs inesperados, a não ser que haja um motivo específico para usar a comparação frouxa que vê apenas valor (==).

 if ('0' === 0) {
    console.log('Passou na comparação');
 } else {
    console.log('Não passou na comparação');
 }


 const numero = 5;
 const segundo_numero = 10;

 // operador ternário
 numero > segundo_numero ? console.log('O primeiro número é maior') : console.log('O segundo número é maior');
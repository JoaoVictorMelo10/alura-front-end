//Simbolos em JavaScript Servem para criar identificadores únicos e garantir que propriedades de objetos não sejam acessadas ou sobrescritas acidentalmente. Em outras palavras: é uma forma de criar "chaves privadas" que evitam conflitos de nomes no seu código.


const meuSimbolo = Symbol('identificador unico');
console.log(meuSimbolo);



const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

console.log(obj[meuSimbolo]);






// Sem Symbol
const carro = {};

carro.id = 123; // eu coloquei
carro.id = 999; // alguém mudou sem querer! 

console.log(carro.id); // 999 (perdeu meu valor)

// Com Symbol
const carro = {};

const meuId = Symbol();
const outroId = Symbol();

carro[meuId] = 123; // meu id
carro[outroId] = 999; // id de outra pessoa

console.log(carro[meuId]); // 123 ✅
console.log(carro[outroId]); // 999 ✅
// os dois existem sem conflito!

// Sem Symbol

console.log(chave1 === chave2); // true (são iguais )

// Com Symbol
const chave1 = Symbol();
const chave2 = Symbol();

console.log(chave1 === chave2); // false ✅
// sempre diferentes, mesmo sem texto!


const senhaSecreta = Symbol();

const usuario = {
  nome: "Maria",
  idade: 25,
  [senhaSecreta]: "abc123"
};

// Listando as propriedades normais
for (let chave in usuario) {
  console.log(chave); // nome, idade
  // senhaSecreta não aparece! 
}

// Só consigo acessar se tiver a variável
console.log(usuario[senhaSecreta]); // "abc123"
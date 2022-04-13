/*
10
10 5 
*/

// 10 10 10

/* 
let p = hrsTrabalhadasDia
let t = dinheiroDia
*/

// -------------- Exercício 1

let nome 
let idade 

console.log(typeof nome)
console.log(typeof idade)

// O tipo impresso foi undefined, pois representa que não foi atribuido nenhum valor a variável.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// Agora "nome" e "idade" são strings, umas vez que tudo que é inserido dentro de um prompt é uma string.

console.log("Olá",nome, ",", "você tem", idade, ".")

// -------------- Exercício 2

let pergunta1
let pergunta2
let pergunta3

pergunta1 = prompt("Você está feliz hoje?")
pergunta2 = prompt("Você gosta de fazer aniversário?")
pergunta3 = prompt("Você está com sono?")

console.log("Você está feliz hoje?", pergunta1)
console.log("Você gosta de fazer aniversário?", pergunta2)
console.log("Você está com sono?", pergunta3)

// -------------- Exercício 3

let a = 10
let b = 25
let c = 0

c = a
a = b 
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10



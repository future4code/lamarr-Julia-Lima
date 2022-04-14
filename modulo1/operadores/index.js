
/*----------------- Exercícios de interpretação de código

1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true)

console.log("d. ", typeof boolean)

2.

Nesse caso, o código será lido como duas strings uma vez que tudo que inserimos em um prompt é uma string. 
Por isso, haverá uma concatenação dos números escolhidos. 
Será impresso um número e depois o outro. Por exemplo, "Digite um número" = 5 e "Digite outro número = 15", 
irá imprimir 515.

3.

A solução é transformar as duas strings e numbers. 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


*/

// -------------- Exercícios de escrita de código
 
1. 


let suaIdade = Number(prompt("Qual é a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeMelhorAmigo)
console.log(idadeMelhorAmigo - suaIdade)

2. 

let num = Number(prompt("Insira um número par"))

console.log(num % 2)

// O resto é sempre 0.

// Se o número inserido for ímpar, o resto será sempre 1.

3.


let idade = Number(prompt("Quantos anos você tem?"))

let idadeEmMeses = idade*12
let idadeEmDias = idadeEmMeses*30
let idadeEmHoras = idadeEmDias*24

console.log("Minha idade em meses é", idadeEmMeses)
console.log("Minha idade em dias é", idadeEmDias)
console.log("Minha idade em horas é", idadeEmHoras)

4.


let num1 = Number(prompt("Diga um número"))
let num2 = Number(prompt("Diga outro número"))

console.log("O primeiro número é maior que segundo?", num1 > num2)
console.log("O primeiro número é igual ao segundo?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo?", (num1 % num2) === 0)
console.log("O segundo número é divisível pelo primeiro?", (num2 % num1) === 0)













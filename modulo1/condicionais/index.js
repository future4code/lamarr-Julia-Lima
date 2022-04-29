/* ----------------------- Exercícios de interpretação de código 

Exercício 1
a) O código pergunta um número ao usuário e depois imprimi se esse 
número dividido por 2 tem resto 0 ou não. 
b) Para números pares. 
c) Para números ímpares. 

Exercício 2
a) Faz uma lista das frutas que tem no supermecado, junto com seus preços. 
Assim, quando o usuário insere o nome da fruta ele consegue saber o preço dela. 
b)O preço da fruta maçã é R$2.25.
c)O preço da pêra é R$5.

Exercício 3
a) Pedindo pro usuário digitar um número. 
b) Se for 10 a mensagem será "Esse número passou no teste",
Se for -10 ocorrerá um erro. 
c) Sim, "console.log(mensagem)" está no escopo global. Enquanto deveria estar no 
escopo local. 
*/

//----------------------- Exercícios de escrita de código 


const idade = Number(prompt("Quantos anos você tem?"))

if (idade > 18) {
    console.log("Você pode dirigir")
    
} else {
    console.log("Você não pode dirigir")
}
 
const turno1 = prompt("Em que turno você estuda? M-manhã, V-Vespertino ou N-Noturno")

if (turno1 === "M") {
    console.log("Bom dia!")
    
} else if (turno1 === "V") {
    console.log("Boa tarde!")

} else {
    console.log("Boa noite!")
}
 

const turno = prompt("Em que turno você estuda? M-manhã, V-Vespertino ou N-Noturno")

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa tarde!")
        break;
    default:
        console.log("Não encontrado")
        break;
} 
 
const genero = prompt("Qual é o gênero do filme?")
const preco = Number(prompt("Qual é o valor do ingresso?"))

if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
} 

// Desafios 
// Exercício 1

 const genero = prompt("Qual é o gênero do filme?")
const preco = Number(prompt("Qual é o valor do ingresso?"))

if (genero === "fantasia" && preco < 15) {
const lanchinho = prompt("Qual lanchinho você vai querer?")
    console.log(`Bom filme!`)
    console.log(`Aproveite o(a) seu(sua) ${lanchinho}`)
} else {
    console.log("Escolha outro filme!")
} 
  
// Exercício 2

const nome = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("Qual é o tipo de jogo? IN - Internacional ou DO - Doméstico")
const etapaDoJogo = prompt("Qual é a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
const categoria = prompt("Qual é a categoria? 1, 2, 3 ou 4.")
const quantidadeDeIngressos = Number(prompt("Quantos ingressos você vai querer?"))
let  valorTotal = valorIngresso * quantidadeDeIngressos
let valorIngresso = 


if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1)  {
    let valorIngresso = 1320
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2)  {
    let valorIngresso = 880
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3)  {
    let valorIngresso = 550
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4)  {
    let valorIngresso = 220
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1)  {
    let valorIngresso = 660
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2)  {
    let valorIngresso = 440
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3)  {
    let valorIngresso = 330
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4)  {
    let valorIngresso = 170
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1)  {
    let valorIngresso = 1980
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2)  {
    let valorIngresso = 1320
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3)  {
    let valorIngresso = 880
    let valorTotal = valorIngresso * quantidadeDeIngressos
} else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4)  {
    let valorIngresso = 330
    let valorTotal = valorIngresso * quantidadeDeIngressos
} 

    console.log("---Dados da compra--- ")
    console.log(`Nome do Cliente: ${nome}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: ${etapaDoJogo}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos}`)
    console.log("---Valores---" )
    console.log(`Valor do ingresso: ${valorIngresso}`)
    console.log(`Valor total: ${valorTotal}`)
   
/* Exercícios de interpretação de código

1. a)10 50

b) Não apareceria nada no console

2. a) A função pede que o usuário insira um texto e retorna se o texto apresenta a palavra cenoura ou não. 
Mas antes disso coloca o texto todo em minúsculo. Para que se houver alguma diferença na escrita da palavra "cenoura", 
não tenha nenhum erro. 

b) As três saídas serão "true".

*/
//1. a)

function informacoesSobreMim(){
    console.log("Eu sou Julia, tenho 28 anos, moro no Rio de Janeiro e sou dentista.")
}

informacoesSobreMim()

//b)
let nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Quantos anos você tem?"))
let endereco = prompt("Em que cidade você mora?")
let profissao  = prompt("Qual é a sua profissão?")

function textosInformacoes(nome, idade, endereco, profissao){


console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em São Paulo e sou ${profissao}.`)

}

textosInformacoes(nome, idade, endereco, profissao)

//2. a)
function numero(num1, num2){
    const soma = num1 + num2
    console.log(soma)
}
numero(1, 5)

//b)
function numeros(num1, num2){
    const maiorOuIgual = num1 >= num2
    console.log(maiorOuIgual)
}
numeros(9,5)

//c)
function numPar(num){
    const numeroPar = num / 2 
    console.log(numeroPar % 0)
}
numPar(4)
//d) 
let textoDoUsuario = prompt("Insira um texto");

function texto(textoDoUsuario){
    console.log(textoDoUsuario.length)
    console.log(textoDoUsuario.toUpperCase())

}
texto(textoDoUsuario)


//3.

const num1 = Number(prompt("Insira um número"))
const num2 = Number(prompt("Insira outro número"))

console.log(`Os números inseridos foram: ${num1} ${num2}` )

function nsoma(num1, num2){
    soma = num1 + num2
    console.log(`soma: ${soma}`)
}
nsoma(num1, num2)

function nsubtracao(num1, num2){
    subtracao = num1 - num2
    console.log(`Diferença: ${subtracao}`)
}
nsubtracao(num1, num2)

function nmultiplicacao(num1, num2){
    multiplicacao = num1*num2
    console.log(`Multiplicacao: ${multiplicacao}`)
}
nmultiplicacao(num1, num2)

function ndivisao(num1, num2){
    divisao = num1/num2
    console.log(`Divisão: ${divisao}`)
}
ndivisao(num1, num2)





/*
Exercício 1 
a. undefined 
b. null
c. 11
d. 3
e. 11
f. 9

Exercício 2

SUBI NUM ONIBUS EM MIRROCOS 26
*/

//Exercício 1

const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu email?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

//Exercício 2

const comidasPreferidas = ["Frango ao creme de milho", "Churrasco", "Bife com batata frita", "Strogonoff", "feijão"]

console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:", comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaPreferidaUsuario = prompt("Qual é a sua comida preferida?")

comidasPreferidas[1] = comidaPreferidaUsuario

console.log(comidasPreferidas)


//Exercício 3

const listaDeTarefas = []

const tarefaUsuario = prompt("Diga 1 tarefa que você precisa realizar no dia")
listaDeTarefas[0] = tarefaUsuario

const tarefaUsuario2 = prompt("Diga uma segunda tarefa que você precisa realizar no dia")
listaDeTarefas[1] = tarefaUsuario2

const tarefaUsuario3 = prompt("Diga uma terceira tarefa que você precisa realizar no dia")
listaDeTarefas[2] = tarefaUsuario3

console.log(listaDeTarefas)

const escolhaTarefa = Number(prompt("Digite o número da tarefa que você já realizou"))

let novaLista = listaDeTarefas.splice(escolhaTarefa, 1)
console.log(novaLista)


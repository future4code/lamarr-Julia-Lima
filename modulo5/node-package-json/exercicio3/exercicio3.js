//Exercício 3

listaDeTarefas = [
    "Lavar Louça",
    "Fazer Caminhada"
]  

const novaLista = process.argv[2]

listaDeTarefas.push(novaLista)

console.log("Tarefa adicionada com sucesso!");
console.table({Tarefas: listaDeTarefas}) 
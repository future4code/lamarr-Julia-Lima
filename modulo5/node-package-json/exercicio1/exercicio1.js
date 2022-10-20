//Exercício 1 

/* a. Acessamos os parâmetros passados na linha de comando, 
através do process.argv, no qual os dois primeiros argumentos são fixos:
node + arquivo que vamos executar + valor(variável) */
 

const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(process.argv[3]) + 7

console.log('Olá ' + nome + '! Você tem ' + idade + ' anos. Em sete anos você terá ' + novaIdade + '.')
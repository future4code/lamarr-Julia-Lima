
/* Exercícios de interpretação de código
Exercício 1
Será impresso um array para cada index do array usuário. Cada
array terá o nome, apelido e index.

Exercício 2
Será impresso um array somente com os nomes. 

Exercício 3
Será impresso um array com todos os apelidos, menos
os que contem "Chijo".

*/
// Exercícios de escrita de código
// Exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a
 function nomeDogs(valorAtual){
    return valorAtual.nome
  }
let soNomes = pets.map(nomeDogs)
console.log(soNomes); 
  

//b
function salsicha(valorAtual){
    return valorAtual.raca === "Salsicha"
}
let sosalsicha = pets.filter(salsicha)
console.log(sosalsicha); 


//c
function principal(valorAtual){
    return valorAtual.raca === "Poodle"
}
let resultante = pets.filter(principal)

function mensagem(resultante){
    let frasePronta = `Você ganhou um cupom de desconto de 10% para tosar o/a ${resultante.nome}`
    return frasePronta
}
let frase = resultante.map(mensagem)
console.log(frase)  

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


function nomeProduto(produtos){
    return produtos.nome
}
let somenteNome = produtos.map(nomeProduto)
console.log(somenteNome)

//b
function nomePreco(produtos){
    let nome = produtos.nome
    let preco = produtos.preco
    let precoFinal = preco - (preco/20)
    
    return `${nome}, ${precoFinal.toFixed(2)}`
}
let precoDesconto = produtos.map(nomePreco)
console.log(precoDesconto)

//c
function bebidas(produtos){
    return produtos.categoria === "Bebidas"
}
let soBebidas = produtos.filter(bebidas)
console.log(soBebidas)

//d 
function ype(produtos){
    return produtos.nome.includes("Ypê")
}
let soYpe = produtos.filter(ype)
console.log(soYpe) 
    
//e

function mensagem(soYpe){
    return `Compre ${soYpe.nome} por ${soYpe.preco}`
}
let somenteYpe = soYpe.map(mensagem)
console.log(somenteYpe)


//Desafios 
//a)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 function lista(pokemons){
     return pokemons.nome
 }
 let listaOrdenada = pokemons.map(lista)
 console.log(listaOrdenada.sort())
 //b)

 function tipos(pokemons){
     return pokemons.tipo
 }

 let tiposPokemon = pokemons.map(tipos)
 console.log(tiposPokemon)
/* ------------ Exercícios de interpretação de código

1.
Matheus Nachtergaele
Virginia Cavendish
Globo 14h

2.
a) 
Juca
Juba
Jubo 

b)Ele faz um espalhamento do objeto, ou seja, ele copia o objeto 
referido alterando chave que já tiver sido criada ou criando uma 
nova chave para aquela que não foi criada ainda. 

3.a)
console.log(minhaFuncao(pessoa, "backender")) = false
console.log(minhaFuncao(pessoa, "altura")) = undefined

b) O console mostra o valor de cada chave, mostrou 
"undefined" para segunda opçao porque não tem essa
chave no objeto. 
*/

// ------------ Exercícios de escrita de código

//Exerxício 1

const objeto = {
    nome: "Julia",
    apelido: ["Juba", " Jujuba", " Julinha"],
    funcaoFrase: () => {
        return (`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}`)
        
    }
}
console.log(objeto.funcaoFrase(objeto))

 
 const novoObjeto = {
    ...objeto,
    apelido: ["Mandioca", " Jujubinha", " Jubs"]
}
console.log((`Eu sou ${novoObjeto.nome}, mas pode me chamar de: ${novoObjeto.apelido}`))

// Exercício 2

const pessoa = {
    nome: "Bruna",
    idade:31,
    profissao:"professora"
    }
    function funcaoArray(pessoa) {
        return (`[${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissao}, ${pessoa.profissao.length}]`)
    }
    console.log(funcaoArray(pessoa))



  const pessoa2 = {
    nome: "Rique",
    idade: 1,
    profissao: "latir"
}   
function funcaoArray2() {
    return (`[${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}]`)
}
console.log(funcaoArray2(pessoa2))


//Exercício 2
  let carrinho = []


const fruta1 = { 
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "manga",
    disponibilidade: true
}

const fruta3 = {
    nome: "morango",
    disponibilidade: true
}

function cesta (fruta1){
    return carrinho.push(`[${fruta1.nome}, ${fruta2.nome}, ${fruta3.nome}]`)
      
  }
  console.log(carrinho.push(fruta1, fruta2, fruta3))
  console.log(carrinho)






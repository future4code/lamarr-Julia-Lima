// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   return array.filter((item) => item % 2 ===0)
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayElevado = []
    for(let num of array){
        if(array.length >=0){
            if(num%2 ===0)
            arrayElevado.push(num**2)
        }
    }
return arrayElevado
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = - Infinity
    for(let i = 0; i< array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
        

    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let variavelMaiorNumero = novoArray[0]
    for(let i = 0; i < novoArray.length; i++){
      if(novoArray[i] > maiorNumero){
        maiorNumero = novoArray[i]
      }
    }
   function divisivel(){ 
   if(num1 % num2 === 0){
     variavelMaiorDivisivelPorMenor = true
   } else {
     variavelMaiorDivisivelPorMenor = false
   }
   return variavelMaiorDivisivelPorMenor
   }
   function diferencaEntreNumeros(){ 
     let resultadoDiferenca
   if(num1 > num2){
     resultadoDiferenca = num1 - num2
   } else {
     resultadoDiferenca = num2 - num1
   }
   return resultadoDiferenca
   }
   let novoObjeto = {
     maiorNumero: variavelMaiorNumero,
     maiorDivisivelPorMenor: divisivel(),
     diferenca: diferencaEntreNumeros()
   }
   return novoObjeto
   }








// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; i < n; i++) {
        let valor = i * 2
        numerosPares.push(valor)
    }
    return numerosPares

    
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC){
        return `Equilátero`
    }
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return `Isósceles`
    }
    else{
        return `Escaleno`
    }
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = array.sort(function(a, b){return a-b})
    let segundoMaior = novoArray[novoArray.length - 2]
    let segundoMenor = novoArray[1]
    let = apenasNumerosPedidos = [segundoMaior, segundoMenor]
    return apenasNumerosPedidos
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO",

    }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let idadeMinima = 14
  let idadeMaxima = 60
  let alturaMinima = 1.5
  let pessoasAutorizadas = pessoas.filter((item) => item.idade > idadeMinima && item.idade < idadeMaxima && item.altura >= alturaMinima)
  return pessoasAutorizadas
   
   
 
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let idadeMinima = 14;
    let idadeMaxima = 60;
    let alturaMinima = 1.5;
    let pessoasNaoAutorizadas = pessoas.filter((item) => item.idade <= idadeMinima || item.idade > idadeMaxima || item.altura < alturaMinima);
    return pessoasNaoAutorizadas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}
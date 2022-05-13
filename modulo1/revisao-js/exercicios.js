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
    let resposta1 
    let resposta2 
    let resposta3 

    resposta1 = function numeroMaior(){
        if (num1>num2){
            return num1
        }else{
            return num2
        }

    }
    resposta2 = function maiorDividindoMenor(){
        if(num1>num2){
            return num1/num2
        }else{
            return num2/num1
        }
    }
    resposta3 = function dif(){
        if(num1>num2){
            return num1-num2
        }else{
            return num2-num1
        }
    }
    const objeto = {
        maiorNumero: resposta1,
        maiorDivisivelPorMenor: resposta2,
        diferenca: resposta3
        };
        return objeto


}





// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    for(let i=0; i<n; i++){
        if((i % 2) === 0){
            return [i]
        }
    }


    
   
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
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
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
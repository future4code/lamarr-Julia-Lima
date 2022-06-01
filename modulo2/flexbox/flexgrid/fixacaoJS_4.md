```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  
  let listaArray = arrayDeNumeros.length
  let contador = 0
  let mensagem = 0
  
  for(let i=0; i < listaArray; i++){
    if(arrayDeNumeros[i] === numeroEscolhido)
    
    contador = contador + i 

  }
}

if(contador > 0 || contador !== 3){ 
  mensagem = console.log(`O número ${numeroEscolhido} aparece ${contador}x`)
} else{
  mensagem = console.log(`Numero não encontrado`)
}
  
 return mensagem 
  
}
```
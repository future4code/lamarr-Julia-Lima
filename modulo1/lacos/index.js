/* 
------------------------- Exercícios de interpretação de código
Exercício 1
O código representa um laço de repetição que começa no 0 e 
soma(+= i) todos os números inferiores a 5(i < 5).
No console irá aparecer: 10(0+1+2+3+4).

Exercício 2
a) Os números maiores que 18 presentes no array.  
19
21
23
25
27
30

b)Sim. Teria que utilizar o indexOf. 

Exercício 3
*
**
***
****

*/

//------------------------- Exercícios de interpretação de código
// Exercício 1

 let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nome = []

if (bichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")

} else if (bichinhos > 0) {
   for (let i = 0; i < bichinhos+1 ; i++) {
       nome.push(prompt(`Qual é o nome de um dos seus bichinhos ${i}?`))
   }
} 
console.log(nome)
  
 // Exercício 2

 arrayOriginal = [50, 23, 55, 890, 40, 980, 70, 350]

//a 
 function numerosArray(arrayOriginal) {
for (let i = 0; i < arrayOriginal.length; i++) {
    elemento = arrayOriginal[i];
    console.log(elemento)
}
}
numerosArray(arrayOriginal)

//b
function arrayPor10(arrayOriginal){
for (let i = 0; i < arrayOriginal.length; i++) {
    elemento = arrayOriginal[i];
    console.log(elemento/10)
}
}  
arrayPor10(arrayOriginal)

//c
function valorArrayPar(arrayOriginal){
    let arrayPares = []
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0) {
        arrayPares.push(arrayOriginal[i])
    }
}
console.log(arrayPares)
}
valorArrayPar(arrayOriginal)

//d

function strings(arrayOriginal) {
    let arrayString = []
for (let i = 0; i < arrayOriginal.length; i++) {
    arrayString = (`O elemento do índex ${i} é: ${}`)
    
}
console.log(arrayString)
}
strings(arrayOriginal)
 
//e

let valorMaximo
let valorMinimo

function imprimirValores(arrayValores) {
    let valorMaximo = 0
    for (let i = 0; i < arrayOriginal.length; i++) {
        let numero = arrayValores[i]
        if(nnumero > valorMaximo){
            valorMaximo = numero
        }
    }
    let valorMinimo = 100
    for (let i = 0; i < arrayOriginal.length; i++) {
        let numero = arrayValores[i]
        if(nnumero < valorMaximo){
            valorMaximo = numero
        }
        
        return `O mair número é ${valorMaximo} e o menor número é ${valorMinimo}.`
    }
    console.log(imprimirValores(arrayValores))






}
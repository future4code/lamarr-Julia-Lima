import { isJSDocPublicTag } from "typescript";
console.log("exercicio 1")

const minhaString: string = "Labenu";
// se atribuirmos um número, dá erro. 

const meuNumero: number = 5;
// variável do tipo número.

let minhaStringENumero: any
// utilizando o tipo "any" consigo que a variável aceite strings e números. 

type pessoa = { 
    nome: string, 
    idade: number, 
    corFavorita: string 
}

const pessoa1: pessoa = {
    nome: "Julia",
    idade: 29,
    corFavorita: "azul"
}


const pessoa2: pessoa = {
    nome: "Bruna",
    idade: 32,
    corFavorita: "vermelho"
}


const pessoa3: pessoa = {
    nome: "Riquelme",
    idade: 2,
    corFavorita: "vermelho"
}

enum CorFavorita {
   cor1 = "vermelho",
   cor2 =  "laranja",
   cor3 = "amarelo",
   cor4 = "verde",
   cor5 = "azul",
   cor6 = "azul escuro",
   cor7 = "violeta"
}

const pessoas = {
    nome: "julia",
    idade: 3,
    CorFavorita: CorFavorita.cor1 ,
}


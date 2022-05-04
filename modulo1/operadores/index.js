/* 
let numero1 = Number(prompt("diga 1 numero"))
let numero2 = Number(prompt("Digita outro numero"))

function exercicio(num1, num2){
    if (num1 === num2)
    console.log("é isso ai")
    else
    console.log("errado")
}

exercicio(numero1, numero2)

let num01 = Number(prompt("fala um numero"))
let num02 = Number(prompt("fala outro numero"))

function comparacao (num1, num2){
    if (num1 > num2) {
    console.log("Número 1 é maior do que o 2");
  }  else if (num1 = num2) {
    console.log("Numero 1 é igual ao numero 2");
  }  else {
    console.log("numero 2 é menor que o numero 1")

}
}
comparacao (num01, num02) */


const dadosUsuario = prompt("Você terminou o ensino médio? Sim ou não ") === "sim"
const dadosUsuario1 = prompt("Você é maior de idade? Sim ou não ") === "sim"
const dadosUsuario2 = prompt("Você está cursando faculdade? Sim ou não ") === "sim"


function aprovado(terminouEnsinoMedio, maiorDeIdade, 
    cursandoFaculdade) {
        if (terminouEnsinoMedio && maiorDeIdade && 
            cursandoFaculdade) {
                console.log("Pode fazer matrícula")
            }else {
            console.log("Não pode fazer matrícula")
        }
     
            
        
    
}

aprovado(dadosUsuario, dadosUsuario1, dadosUsuario2)
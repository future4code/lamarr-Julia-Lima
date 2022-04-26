// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Diga a altura do triângulo"))
  const largura = Number(prompt("Diga a largura do triângulo"))

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  imc = peso / (altura*altura)
  return (peso/ (altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  let idade = Number(prompt("Quantos anos você tem?"))
  let email = prompt("Qual é o seu email?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Diga sua cor favorita")
  const cor2 = prompt("Diga outra cor favorita")
  const cor3 = prompt("Diga outra cor favorita")

console.log([cor1, cor2, cor3])
  

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = Number(prompt("Quanto custou o espetáculo?"))
  valorIngresso = Number(prompt("Qual é o valor de cada ingresso?"))
  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  return primeiro

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length - 1]
  return ultimo
 
  
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))
  let anoEmissao = Number(prompt("Qual é o ano de emissão do seu RG?"))

  let idade = anoAtual - anoNascimento 

  let renovacao20Anos = (idade <=20) && ((anoAtual - anoEmissao) >=5)
  let entre20e50anos = (idade >20) && (idade <=50) && ((anoAtual - anoEmissao) >= 10)
  let maisQue50 = (idade >50) && ((anoAtual - anoEmissao) >=15)

  let resultado = renovacao20Anos || entre20e50anos || maisQue50

  console.log(resultado)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
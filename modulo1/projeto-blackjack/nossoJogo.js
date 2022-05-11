/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   
    console.log("Boas vindas ao jogo de Blackjack!")

      const carta1 = comprarCarta(); 
      const carta2 = comprarCarta();
      const soma = (carta1.valor + carta2.valor)

      const cartaPc1 = comprarCarta(); 
      const cartaPc2 = comprarCarta();
      const somaPc = (cartaPc1.valor + cartaPc2.valor)

    if (confirm("Quer iniciar uma nova rodada?")) {
     
      console.log(`${carta1.texto} ${carta2.texto} ${soma}`)
      console.log(`${cartaPc1.texto} ${cartaPc2.texto} ${somaPc}`)

      console.log(`Usuário: ${carta1.texto} ${carta2.texto} - pontuação ${soma}`)
      console.log(`Computador ${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${somaPc}`)

      if (soma > somaPc){
         console.log("O usuário venceu!")
      }

      if (soma < somaPc){
         console.log("O computador venceu!")
      }

      if (soma === somaPc){
         console.log("Empate!")
      }

    } else {
      console.log("O jogo acabou")
      } 
 

   
 


 

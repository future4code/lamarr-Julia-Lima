console.log("exercício 2");

//------------- Cadastro de Cliente

novoCliente = {id: 5, nome: "Astrodev"}

const clientesCadastrados = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const adicionarCliente = () => {
    clientesCadastrados.push(novoCliente)
   
}

adicionarCliente()
console.log(clientesCadastrados) 


//------------- Gerador de Tabuada

const geradorDeTabuada = (number) => {
    if(number > 1 && number <= 10 ){
        console.log(
            number, "x", 0, "=", number * 0,
            number, "x", 1, "=", number * 1,
            number, "x", 2, "=", number * 2,
            number, "x", 3, "=", number * 3,
            number, "x", 4, "=", number * 4,
            number, "x", 5, "=", number * 5,
            number, "x", 6, "=", number * 6,
            number, "x", 7, "=", number * 7,
            number, "x", 8, "=", number * 8,
            number, "x", 9, "=", number * 9,
            number, "x", 10, "=", number * 10
            )
            
    } else {
        console.log("Erro. Parâmetro inválido (número precisa valer entre 1 e 10).")
    }
}

geradorDeTabuada(8)
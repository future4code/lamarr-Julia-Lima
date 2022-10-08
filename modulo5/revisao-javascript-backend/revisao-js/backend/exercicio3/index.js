console.log("exercicio 3");

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]


const cadastroDeContas = (email, senha) => {
    if(senha.length < 6){
        console.log("senha deve possuir no mínimo 6 caracteres!")
    }
           else{
         console.log("login bem-sucedido")
        }

    }


cadastroDeContas("labenu@hotmail.com", "olaola")
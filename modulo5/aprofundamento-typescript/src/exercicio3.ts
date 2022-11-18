console.log("exercício 3")

const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  type post = {
    autor: string,
    texto: string
  }

  const post: string[] = []

  function buscarPostsPorAutor(posts: string, autorInformado: string) : boolean {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  // entradas: posts e autorInformado, a saída é um boolean

import express, {Request, Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


app.get("/caminho", (req: Request, res: Response) => {

   res.status(200).send("Hello from Express")
  
})

//exercício1

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
 });
 

 //exercício 2
type Usuário = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}
//exercício 3
const usuarios: Usuário[] = [
    {id:1,  
    name:"Julia",
    phone: 1515151515,
    email: "julia@email.com.br",
    website: "www.julia.com.br"
},
    {id:2,
    name:"Riquelme",
    phone: 2515347,
    email: "riquelme@email.com.br",
    website: "www.riquelme.com.br"
},
    {id:3,
    name:"Bruna",
    phone: 9899478,
    email: "bruna@email.com.br",
    website: "www.bruna.com.br"
},
    {id:4,
    name:"Arizona",
    phone: 89647223,
    email: "arizona@email.com.br",
    website: "www.arizona.com.br"
},
    {id:5,
    name:"Callie",
    phone: 84563255,
    email: "callie@email.com.br",
    website: "www.callie.com.br"
}]

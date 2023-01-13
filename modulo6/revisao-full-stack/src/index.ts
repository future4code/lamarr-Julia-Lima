import express, { application } from "express"

import cors from 'cors'
import ping from "./endpoints/ping"
import { creatClient } from "./endpoints/createClient"
import { getAllClients } from "./endpoints/allClients"
import { getAllProducts } from "./endpoints/allProducts"
import { createOrder } from "./endpoints/createOrder"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/ping", ping );

//add cliente
app.post("/client", creatClient);

//listar todos os clientes
app.get("/allClients", getAllClients);

//listar todos os produtos
app.get("/allProducts", getAllProducts);

//criar pedido
app.post("/order", createOrder);

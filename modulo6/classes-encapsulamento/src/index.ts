import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'
import { createPurchase } from './endpoints/createPurchase'
import { getUserPurchases } from './endpoints/getUserPurchases'
import { Product } from './class/Product'
import { User } from './class/User'
import { Purchase } from './class/Purchase'


dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

// Exercício 1 - Create users
app.post("/users", createUser)

// Exercício 2 - Get users
app.get("/users", getUsers)

// Exercício 3 - Create product
app.post("/products", createProduct)

// Exercício 4 - Get products
app.get("/products", getProducts)

// Exercício 5 - Create purchase
app.post("/purchases", createPurchase)

// Exercício 6 - Get user purchases
app.get("/users/:id/purchases", getUserPurchases)


const user1 = new User("101", "astrodev@gmail.com", "bananinha");
const user2 = new User("102", "fulano@gmail.com", "qwerty00");
const user3 = new User("103", "ciclana@gmail.com", "asdfg123");

const product1 = new Product("201", "Webcam", 99.00);
const product2 = new Product("202", "Teclado Gamer", 250.00);
const product3 = new Product("203", "Monitor", 459.00);
const product4 = new Product("204", "Impressora", 275.25);
const product5 = new Product("205", "Mouse Gamer", 399.99);

const purchase1 = new Purchase("301", "101", "201", 1, 99.00);
const purchase2 = new Purchase("302", "101", "203", 1, 459.99);
const purchase3 = new Purchase("303", "101", "202", 2, 500);





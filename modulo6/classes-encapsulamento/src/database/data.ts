import { Product } from "../class/Product";
import { Purchase } from "../class/Purchase";
import { User } from "../class/User";



const user1 = new User("101", "astrodev@gmail.com", "bananinha");
const user2 = new User("102", "fulano@gmail.com", "qwerty00");
const user3 = new User("103", "ciclana@gmail.com", "asdfg123");

console.log(user1, user2, user3)

const product1 = new Product("201", "Webcam", 99.00);
const product2 = new Product("202", "Teclado Gamer", 250.00);
const product3 = new Product("203", "Monitor", 459.00);
const product4 = new Product("204", "Impressora", 275.25);
const product5 = new Product("205", "Mouse Gamer", 399.99);

console.log(product1)


const purchase1 = new Purchase("301", "101", "201", 1, 99.00);
const purchase2 = new Purchase("302", "101", "203", 1, 459.99);
const purchase3 = new Purchase("303", "101", "202", 2, 500);
 

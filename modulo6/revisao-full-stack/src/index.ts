import express from "express"

import cors from 'cors'
import ping from "./endpoints/ping"
import { creatClient } from "./endpoints/createClient"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/ping", ping );

//add cliente
app.post("/client", creatClient)
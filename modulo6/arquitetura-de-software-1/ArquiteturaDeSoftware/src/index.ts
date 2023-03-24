import express from "express"
import cors from 'cors'
import { UserBusiness } from "./business/UserBusiness"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


const UserController = new UserBusiness()
app.post('/user', UserController.createUser)


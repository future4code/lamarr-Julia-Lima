import React, {useState} from 'react';
import axios from 'axios'


export const TelaCadastro = () => {

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")


    const getNameInput = (e) => {
        setInputName(e.target.value)
    }

    const getEmailInput = (e) => {
        setInputEmail(e.target.value)
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const myHeader = {
        headers: {
            Authorization: 'julia-marques-lamarr'
        }
    }
    const body = {
            "name": inputName,
            "email": inputEmail
        }

    const adicionar = (e) => {
        e.preventDefault()
        axios.post(url, body, myHeader)
        .then( () => {
            alert("Deu certo!")
        })
        .catch((erro) => {
            alert("Ops, algo deu errado")
        })
    }
    return(
    <div>
    <h3>Cadastro do usuário</h3>
    <label>Nome:</label>
    <input type='text' id='name' value={inputName} onChange={getNameInput}></input>
    <label>Email:</label>
    <input type='text' id='email' value={inputEmail} onChange={getEmailInput}></input>
    <button onClick={adicionar}>Cadastrar</button>
    </div>
)}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToAdminHomePage} from '../Routes/Coordinator'
import useForm from '../hook/useForm';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate()

    const [form, onChange] = useForm ({email:"", password:""})

    const login = (event) => {
        event.preventDefault()
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/julia-marques-lamarr/login",
        form)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message))
    }
    return (
        <div>
            <p>LoginPage</p>

            <form onSubmit={login}>
                <label htmlFor="email" >Email:</label>

                <input
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                />
                <label htmlFor="password" >Senha:</label>
                <input
                    name="password"
                    id="password"                  
                    placeholder="Password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    required
                />
                <button type="submit"> Fazer Login</button>
            </form>
            <button onClick={() => {goToAdminHomePage(navigate)}}>Já estou logado</button>
        </div>
    )   
}
export default LoginPage;


import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {goToAdminHomePage} from '../Routes/Coordinator'
import useForm from '../hook/useForm';
import axios from 'axios';
import {BASE_URL} from '../constants/constants';
import { useProtectedPage } from '../hook/useProtectPage';

const LoginPage = () => {
    useProtectedPage();
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm ({email:"", password:""})

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/admin/trips/list");
        };
    }, [navigate]);

    const submitLogin = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/login`,
        form)
        .then(response => {
            localStorage.setItem("token", 
            response.data.token)
            navigate("/admin/trips/list")
        })
        .catch((error) => console.log(error.message)) 
    clear();
        
    }
    return (
        <div>
            <p>LoginPage</p>

            <form onSubmit={submitLogin}>
                <label htmlFor="email" >Email:</label>

                <input
                    name="email"  //colocar igual a propriedade que está no estado inicial do useForm!
                    id="email" //colocar igual ao htmlFor do label
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange} 
                    type="email"  //faz validações de e-mail
                    required //torna campo obrigatório
                />
                <label htmlFor="password" >Senha:</label>
                <input
                    name="password"
                    id="password"                  
                    placeholder="Password"
                    value={form.password}
                    onChange={onChange}            
                    type="password"
                    pattern="^.{3,}$" //padrão Regex
                    title="mínimo de 3 caracteres"
                    required
                />
                <button type="submit"> Fazer Login</button>
            </form>
            <button onClick={() => {goToAdminHomePage(navigate)}}>Já estou logado</button>
        </div>
    )   
}
export default LoginPage;


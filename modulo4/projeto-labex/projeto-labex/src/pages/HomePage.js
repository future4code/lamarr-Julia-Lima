import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage, goToLoginPage, goToAdminHomePage} from '../Routes/Coordinator'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
          <p> HomePage </p>
          <button onClick={() => {goToListTripsPage (navigate)}}>Lista de Viagens</button>
          <button onClick={() => {goToLoginPage(navigate)}}>Login</button>
          <button onClick={() => {goToAdminHomePage(navigate)}}>Já estou logado</button>
        
        </div>
    )
    
}

export default HomePage;
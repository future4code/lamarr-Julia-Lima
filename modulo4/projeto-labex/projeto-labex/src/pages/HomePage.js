import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripPage = () => {
        navigate("/trips/list")
    }
    const goToLoginPage = () => {
        navigate("/login")
    }
    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }
    return (
        <div>
          <p> HomePage </p>
          <button onClick={goToListTripPage}>Lista de Viagens</button>
          <button onClick={goToLoginPage}>Login</button>
          <button onClick={goToAdminHomePage}>Já estou logado</button>
        
        </div>
    )
    
}

export default HomePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }
    return (
        <div>
            <p>List Trips Page</p>
            <button onClick={goToApplicationFormPage}>Formulário de Aplicação</button>
          
        
        </div>
    )
    
}

export default ListTripsPage;


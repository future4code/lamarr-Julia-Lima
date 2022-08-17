import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToApplicationFormPage} from '../Routes/Coordinator'

const ListTripsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>List Trips Page</p>
            <button onClick={() => {goToApplicationFormPage(navigate)}}>Formulário de Aplicação</button>
          
        
        </div>
    )
    
}

export default ListTripsPage;


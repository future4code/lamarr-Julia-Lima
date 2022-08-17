import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCreateTripPage, goToTripDetailsPage } from '../Routes/Coordinator';

const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
          <p>AdminHomePage</p>
          <button onClick={() => {goToCreateTripPage(navigate)}}> Criar uma Viagem</button>
          <button onClick={() => {goToTripDetailsPage(navigate)}}>Detalhes da Viagem</button>
        </div>
    )
}

export default AdminHomePage;

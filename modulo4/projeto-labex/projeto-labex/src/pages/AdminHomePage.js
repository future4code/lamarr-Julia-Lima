import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
    const navigate = useNavigate()

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }
    const goToTripDetailsPage = () => {
        navigate("/admin/trips/:id")
    }
    return (
        <div>
          <p>AdminHomePage</p>
          <button onClick={goToCreateTripPage}> Criar uma Viagem</button>
          <button onClick={goToTripDetailsPage}>Detalhes da Viagem</button>
        </div>
    )
}

export default AdminHomePage;

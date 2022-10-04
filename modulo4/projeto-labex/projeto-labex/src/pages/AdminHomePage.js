import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToCreateTripPage, goToHomePage, goToTripDetailsPage } from '../Routes/Coordinator';
import { useRequestData } from '../hook/useRequestData';
import { useProtectedPage } from '../hook/useProtectPage';
import { BASE_URL } from '../constants/constants';

const AdminHomePage = () => {
    useProtectedPage();

    const navigate = useNavigate()

    const sobreViagens = (id) => {
      navigate(`/admin/trips/${id}`)
    }



    const [trip, isLoadingtrip, errortrip] = useRequestData(`${BASE_URL}trips`)

    const tripList = trip && trip.trips.map((viagem)=>{
      return(
      <div key={viagem.id}>
        <div onClick={() => sobreViagens(viagem.id) }>
          <span>
            {viagem.name}
          </span>
         
        </div>
      </div>
    )})

    return (
        <div>
          <p>AdminHomePage</p>
          {tripList}
          {isLoadingtrip&& <p> Carregando  Viagens</p>}    
          {!isLoadingtrip&& errortrip&&<p>Ocorreu um erro com as viagens</p>}    
          {!isLoadingtrip&&trip&&trip.trips.length >0 &&tripList}   
          {!isLoadingtrip&&trip&&trip.trips.length === 0 &&(<p> Não há viagens</p>)}
          <button onClick={() => {goToHomePage(navigate)}}> Página Inicial</button>
          <button onClick={() => {goToCreateTripPage(navigate)}}> Criar uma Viagem </button>
          <button onClick={() => {goToTripDetailsPage(navigate)}}> Detalhes da Viagem </button>
        </div>
    )
}

export default AdminHomePage;

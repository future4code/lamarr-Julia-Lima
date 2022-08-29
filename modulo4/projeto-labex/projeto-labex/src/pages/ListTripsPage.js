import React from 'react';
import {BASE_URL} from "../constants/constants"
import { useNavigate } from 'react-router-dom';
import {goToApplicationFormPage} from '../Routes/Coordinator'
import { useRequestData } from '../hook/useRequestData'
import {ListTripBox}  from './style'

export function ListTripsPage() {

    const navigate = useNavigate()

    const [viagens, isLoadingViagens,errorViagens] = useRequestData(`${BASE_URL}trips`)

    const listaDeViagens = viagens && viagens.trips.map((viagem)=>{

    return  <p>Name: {viagem.name} <br/>
            Description: {viagem.description} <br/>
            Planet: {viagem.planet} <br/>
            Duration in Days: {viagem.durationInDays} <br/>
            Data: {viagem.date} </p>
    })

  return (
    <ListTripBox>
        <section>
          <h1>Lista de Viagens</h1>
            <div>
            {listaDeViagens}
            
              {isLoadingViagens && <p> Carregando  Viagens</p>}
              {!isLoadingViagens&& errorViagens&&<p>Ocorreu um erro com as viagens</p>}
              {!isLoadingViagens&&viagens&&viagens.length >0 &&listaDeViagens}
              {!isLoadingViagens&&viagens&&viagens.length === 0 &&(<p> Não há viagens</p>)}  
            </div>       
            <button onClick={() => {goToApplicationFormPage(navigate)}}>Formulário de Aplicação</button>
        </section>
          
    </ListTripBox>   
  );
  }
export default ListTripsPage;


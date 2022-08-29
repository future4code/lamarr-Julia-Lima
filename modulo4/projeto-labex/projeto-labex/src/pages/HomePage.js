import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage, goToLoginPage, goToAdminHomePage} from '../Routes/Coordinator'
import {HomepageBox, Login, Header, Botões}  from './style'


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <HomepageBox>    
          <Header>     
            <Login onClick={() => {goToLoginPage(navigate)}}>Login</Login>
          </Header>  
              <p>Bem Vindo ao LabeX! </p> <br></br>
              <p>A LabeX te leva pra fazer uma viagem de outro mundo! <br></br>
               Pode ser pelo Planeta Terra ou qualquer outro que você preferir! <br></br>
               Pronto para começar sua viagem pelo universo? <br></br>
              <a href="/trips/list">Clique aqui </a> para ter acesso a nossa lista de viagens já disponíveis <br></br> 
               ou faça o <a href="/login">Login</a> pra
               planejar sua própria viagem! <br></br>
               Aqui, a única regra é se divertir!</p>
                  <Botões>
                    <button onClick={() => {goToListTripsPage (navigate)}}>Lista de Viagens</button>
                    <button onClick={() => {goToAdminHomePage(navigate)}}>Gerenciar Minhas Viagens</button>
                  </Botões>
        </HomepageBox>
    )
    
}

export default HomePage;
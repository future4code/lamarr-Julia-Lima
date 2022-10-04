import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import {useProtectedPage} from '../hook/useProtectPage';
import { useRequestData } from '../hook/useRequestData';
import { goToHomePage } from '../Routes/Coordinator';

const TripDetailsPage = () => {

    const navigate = useNavigate()

    useProtectedPage()

    useParams()

    const [details] = useRequestData(`${BASE_URL}/trip/:id`)

      const tripsDetails= details && details.trips.map((detalhe)=>{
        return<p>{detalhe.name}</p>
        })

    return ( 

        <div>
            <p>TripDetailsPage</p>           
                {tripsDetails}
                <button onClick={() => {goToHomePage(navigate)}}> Página Inicial</button>
        </div>

    )
    
}
export default TripDetailsPage;


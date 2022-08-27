import React, {useState} from 'react';
import useForm from '../hook/useForm';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useRequestData} from '../hook/useRequestData';
import {BASE_URL} from '../constants/constants';
import { goToHomePage } from '../Routes/Coordinator';

const CreateTripPage = () => {
    const [form, onChange, clear] = useForm ({name:"", planet:"", date:"", description:"", durationInDays:"" })
    
    const [inputTrip, setInputTrip] = useState("")


    const navigate = useNavigate();

    const pageListTrip = () => {
        navigate("/trips/list")
    }

    const submitTrip = (event) => {
        event.preventDefault()

        const body = {
            ...form
        }

        axios.post(`${BASE_URL}trips/${inputTrip}/apply`, body)
            .then((response) => {alert("Viagem enviada com sucesso")
            console.log(response.data)})
            .catch((error) => {console.log(error.message)})

    clear()

    }

    const [trips] = useRequestData(`${BASE_URL}trips`)
    const tripList = trips&&trips.trips.map((item) => {
        return (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        )
    })



    return ( 
            <div>

                <p>Inscreva-se para uma viagem!</p>
                <form onSubmit={submitTrip}>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}
                    type="name"
                    pattern="^.{5,}"
                    title="Deve conter no mínimo 5 caracteres"
                    required
                    
                />

                <label htmlFor="planet">Planet:</label>
                <input
                    name="planet"
                    id="planet"
                    placeholder="Planet"
                    value={form.planet}
                    onChange={onChange}
                    type="text"
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    name="date"
                    id="date"
                    placeholder="Date"
                    value={form.date}
                    onChange={onChange}
                    type="date"
                    pattern=""
                    title="Deve ser uma data no futuro"
                    required
                />

                <label htmlFor="description">Description:</label>
                <input
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={onChange}
                    type="text"
                    pattern="^.{30,}"
                    title="Deve conter no mínimo 30 caracteres"
                    required
                />

                <label htmlFor="durationInDays">DurationInDays:</label>
                <input
                    name="durationInDays"
                    id="durationInDays"
                    placeholder="DurationInDays"
                    value={form.durationInDays}                   
                    onChange={onChange}
                    type="number"
                    pattern=""
                    title="Deve conter no mínimo 50 dias"
                    required
                />
                
                <button type="submit">Enviar minha viagem</button>              
            </form>
                <button onClick={pageListTrip}>Lista de Viagens</button>
                <button onClick={() => {goToHomePage(navigate)}}> Página Inicial</button>
        </div>   
    )
}

export default CreateTripPage;
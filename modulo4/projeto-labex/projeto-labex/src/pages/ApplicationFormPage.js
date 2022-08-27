import React, {useState} from 'react';
import useForm from '../hook/useForm';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useRequestData} from '../hook/useRequestData';
import {BASE_URL} from '../constants/constants';
import { goToHomePage } from '../Routes/Coordinator';

const ApplicationFormPage = () => {
    const [form, onChange, clear] = useForm ({name:"", age:"", text:"", profession:"", country:"" })
    
    const [inputTrip, setInputTrip] = useState("")

    const update = (e) => {
        setInputTrip(e.target.value)
    }

    const navigate = useNavigate();

    const pageListTrip = () => {
        navigate("/trips/list")
    }

    const inscrever = (event) => {
        event.preventDefault()

        const body = {
            ...form
        }

        axios.post(`${BASE_URL}trips/${inputTrip}/apply`, body)
            .then((response) => {alert("Cadastro feito com sucesso!")
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

            <form onSubmit={inscrever}>
                <select value={inputTrip} onChange={update}>

                    <option>Selecione uma viagem</option>
                    {tripList}

                </select>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}
                    type="name"
                    pattern="^.{3,}"
                    title="Deve conter no mínimo 3 caracteres"
                    required
                    
                />

                <label htmlFor="age">Age:</label>
                <input
                    name="age"
                    id="age"
                    placeholder="age"
                    value={form.age}
                    onChange={onChange}
                    type="number"
                    pattern=""
                    title="Deve ser maior que 18 anos"
                    required
                />

                <label htmlFor="Application Text">Application Text:</label>
                <input
                    name="text"
                    id="Application Text"
                    placeholder="Application Text"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text"
                    pattern="^.{30,}"
                    title="Deve conter no mínimo 30 caracteres"
                    required
                />

                <label htmlFor="profession">Profession:</label>
                <input
                    name="profession"
                    id="Profession"
                    placeholder="Profession"
                    value={form.profession}
                    onChange={onChange}
                    type="text"
                    pattern="^.{10,}"
                    title="Deve conter no mínimo 10 caracteres"
                    required
                />

                <label htmlFor="country">Country:</label>
                <input
                    name="country"
                    id="country"
                    placeholder="Country"
                    value={form.country}                   
                    onChange={onChange}
                    type="text"
                    required
                />
                
                <button type="submit">Inscrever</button>              
            </form>
                <button onClick={pageListTrip}>Lista de Viagens</button>
                <button onClick={() => {goToHomePage(navigate)}}> Página Inicial</button>
        </div>   
    )    
}

export default ApplicationFormPage;
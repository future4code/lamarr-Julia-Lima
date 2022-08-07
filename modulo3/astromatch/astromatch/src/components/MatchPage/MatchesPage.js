import React, { useState, useEffect }  from "react";
import axios from "axios";
import { ContainerMatches } from "./style";


export function MatchesPage (props) {

const [match, setMatch] = useState ([])

const urlMatch = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"

const getMatches = () => {
    axios.get(urlMatch)
    .then((response) => {setMatch(response.data.matches)})
    .catch((error) => console.log(error.response))
}

useEffect(() => {
    getMatches()
}, [])

const putClear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear")
    .then((response) => {getMatches()
    alert("Matches deletados com sucesso")})
    .catch((error) => console.log(error.response))
}


    return (
        <ContainerMatches>
            <h1>Seus Matches</h1>
            {match.map((item) =>{
                return (
                    <ul key={item.id}>
                        {item.name}
                    </ul>
                )
            })}
            <footer>
            <button onClick={() => {
                props.trocaDeTela("inicial")
            }}>Tela inicial</button>

            <button onClick={putClear}>Limpar Matches</button>
            </footer>
        </ContainerMatches>
    )
}
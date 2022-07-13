import React from 'react';
import styled from "styled-components";

const Form3 = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;


`

export function Etapa3 () {
    return(
        <Form3>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <p>7. Por que você não terminou um curso de graduação?</p>
            <input type="text"></input>
            <p>8. Você fez algum curso complementar?</p>
            <input type="text"></input>
         </Form3>
    );
}


export default Etapa3;
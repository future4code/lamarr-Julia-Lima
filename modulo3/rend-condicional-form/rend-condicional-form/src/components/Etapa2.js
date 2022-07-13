import React from 'react';
import styled from "styled-components";

const Form2 = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;


`

export function Etapa2 () {
    return(
        <Form2>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <p>5. Qual curso?</p>
            <input type="text"></input>
            <p>6. Qual a unidade de ensino?</p>
            <input type="text"></input>
         </Form2>
    );
}


export default Etapa2;
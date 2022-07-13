import React from 'react';
import styled from "styled-components";

const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export function Etapa1 () {
    return(
            <Form>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual é o seu nome?</p>
                <input type="text"></input>
                <p>2. Qual sua idade?</p>
                <input type="number"></input>
                <p>3. Qual seu email?</p>
                <input type="email"></input>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value="">Selecione</option>
                    <option value="1">Ensino médio Incompleto</option>
                    <option value="2">Ensino médio</option>
                    <option value="3">Ensino superior Incompleto</option>
                    <option value="3">Ensino superior</option>
                </select>   
            </Form>
        
    );
}

export default Etapa1;

import React from 'react';
import styled from "styled-components";

const FormFinal = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
export function Final () {
    return(
        <FormFinal>
           <h1>O FORMULÁRIO ACABOU</h1>
           <p>Muito obrigado por participar! Entraremos em contato!</p>
        </FormFinal>
    );
}

export default Final;
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    :root {
        --soft-white: #f2f2f2;
        --dodgerBlue: #1E90FF;
        --blueViolet: #8A2BE2;
        --lightSkyBlue: #87CEFA;
        --grey11: #1C1C1C;
    }

    h1 {
        font-family: 'Kanit', cursive;
        color: var(--dodgerBlue);
    }

    p {
        font-family: 'Kanit', cursive;
        color: var(--grey11);
    }

    body {
        background: var(--lightSkyBlue);
        color: var(--soft-white);
    }

    * {
    margin: 0;
    padding: 0;
    }

   

`

import styled from 'styled-components' ;

export const Container = styled.div `
    *{ margin: 0px;
    padding: 0px;
    }
`
// ------- Estilização header 
 export const Header = styled.div `
    
    display: flex;
    justify-content: center;

img {
    width: 80px;
}    

h1{
    margin-top: 40px;
    
}
`
// ------- Estilização Main
export const Main = styled.div `
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    margin-bottom: 0px;

section{
    background-color: orange;
    height:100vh;
}

div{

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-right: 150px;
    margin-left: 30px;
    margin-bottom: 10px;
}

input{
    width: 130px;
}

.inputModificado{
    width:300px;

}

button{
    width: 130px;

}   
     `
// ------- Estilização Footer
export const Footer = styled.div `
    background-color:grey;
    text-align: center;
    padding: 3px;
    

    
    


`
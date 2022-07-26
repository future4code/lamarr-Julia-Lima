
import styled from "styled-components"



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
    margin-top: 25px;
    font-size:30px;
    
}
`
// ------- Estilização Main
export const Main = styled.div `
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-bottom: 0px;

label{
      position: absolute;
      width: 1px;
      height: 1px;
      padding:0;
      margin:-1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border:0

}

section{
    background-color: orange;
    height:100vh;
}
div{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 2px;
}
input{
    width: 150px;
    height:20px;
    border-radius: 40px;
    padding: 5px;
    
}
.inputModificado{
    height:20px;
    width:445px;
    
}
button{
    height:30px;
    width: 50px;
    border-radius: 40px;
}   
     `
// ------- Estilização Footer
export const Footer = styled.div `
    background-color:grey;
    text-align: center;
    padding: 3px;
    `
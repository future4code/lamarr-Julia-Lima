import styled from "styled-components";

export const HomePageContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ADD8E6 ;
    border-radius: 2%;
    padding: 10px;
    height: 750px;
    width: 400px;

h1{
    color: #4B0082;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

p{
    color:#2F4F4F;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

button{
    margin: 0 20px;
    padding: 5%;

}

`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;


img{
    width: 50px;
    padding: 5%;
    border-radius: 50%;
}

form{
    margin-top: 10px;
    display:flex;
    justify-content: space-between;
}
    
` 

export const ContainerImage = styled.img`
width: 300px;
height: 400px;
border-radius: 2%
`
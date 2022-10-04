import React, {useState, useEffect} from "react";
import axios from "axios";
import {HomePageContainer, ContainerImage, ContainerButton} from "./style"


export function HomePage(props){
    const [pessoa, setPessoa] = useState ({});

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person';

    const getProfileToChoose = () => {
        axios.get(url)
        .then((response) => setPessoa(response.data.profile))
        .catch((error) => console.log(error.response))
    }
    useEffect(() => {
        getProfileToChoose()
    }, [])

    
    const postChoosePerson = (choice) => {
        const body = {
            id: pessoa.id,
            choice: choice
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)
        .then((response) => {getProfileToChoose()
        })
        .catch((error) => console.log(error.response))
    }
    const like = () => {
        postChoosePerson(true)
        alert("Adicionado com sucesso")
    }

    const disLike = () => {
        postChoosePerson(false)
    }

   
        return (
            <HomePageContainer key={pessoa.id}>
                <h1>astromatch</h1>
                   <ContainerImage src={pessoa.photo}/>
                      <p>{pessoa.name}, {pessoa.age} </p>
                      <p>{pessoa.bio}</p>
                   <ContainerButton>
                      <form type="submit" onClick={like}></form>
                      <img src="https://p.kindpng.com/picc/s/132-1323936_tinder-heart-and-x-hd-png-download.png" onClick={like} alt="coraçao"></img>
                      <form type="submit" onClick={disLike}> </form>
                      <img src="https://www.pngitem.com/pimgs/m/178-1789326_x-do-tinder-png-transparent-png.png"  onClick={disLike} alt="letra x"></img>
                      <button onClick={() => {props.changePage("matches") }}>Tela de Matches</button>
                   </ContainerButton>
            </HomePageContainer>      
        )
    } 



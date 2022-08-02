import React, {useEffect, useState} from 'react';
import axios from 'axios'


export const TelaLista = () => {
    const [myList, setMyList] = useState([]);
    const [myInput, setMyInput] = useState("")

    //Recebe input 
    const atualizaInput = (event) => {
        setMyInput(event.target.value)
    }

    //Tranformando lista em componentes
    const componentsLista = myList.map((item, index) =>{
        return (
            <div key={index}>
                <p>{item.name}</p>
            </div>
        )
    })

    useEffect(() => {
        getPlayList()
    }, [])

    //---- AXIOS ---
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const myHeader = {
        headers: {
            Authorization: 'julia-marques-lamarr'
        }
    }
    const body = {
            "name": myInput,
            "email": myInput
        }
    

    //GET
    const getPlayList = () => {
        axios.get(url, myHeader)
        .then((response) => {
            setMyList(response.data);
        })
    }

    //DELETAR
    const deletaPessoa = (event) => {
        event.preventDefault()
        const deleteItem = myList.filter((item) => {
            return (
                item.name == myInput
            )
        })
        const idDeleteItem = deleteItem[0].id

        axios.delete(url+"/"+idDeleteItem, myHeader)
        .then(()=>{
            alert("Deletado");
            getPlayList()}
        )
        .catch((erro) =>{
            alert("Ops!Algo deu errado!")
        })
        setMyInput("")
    }


    return (
        <div>
            <h1>Lista de Usuários</h1>
            {componentsLista} 
            <form>
                <input type='text' value={myInput} onChange={atualizaInput}></input>
                <button onClick={deletaPessoa} >Exluir Pessoa</button>
            </form>
        </div>
    )
}



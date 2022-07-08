import React,  { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 20%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: gray;
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
`



function App() {

  // estados
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")
  const [postagem, setPostagem] = useState([
    {
     nomeUsuario: "paulinha",
     fotoUsuario: "https://picsum.photos/50/50",
     fotoPost: "https://picsum.photos/200/150"
    },

    {
       nomeUsuario: 'julinha',
       fotoUsuario: 'https://picsum.photos/id/237/200/300',
       fotoPost: 'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?w=2000'

    },

    {
       nomeUsuario: 'pedrinho',
       fotoUsuario: 'https://www.napratica.org.br/wp-content/uploads/2019/07/michelle-obama-1.jpg',
       fotoPost: 'https://www.grupoescolar.com/wp-content/uploads/2021/03/paisagem-2C.jpg'
    }
  ])

  //eventos 

  const handleInputNomeUsuario = (e) => {
    setInputNomeUsuario(e.target.value)
  }

  const handleInputFotoUsuario = (e) => {
    setInputFotoUsuario(e.target.value)
  }

  const handleInputFotoPost = (e) => {
    setInputFotoPost(e.target.value)
  }

  // adicionar item
  const addPostagem = (e) => {
    e.preventDefault();

    const novaPostagem = {nomeUsuario: inputNomeUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPost}
    const novaListaDePostagem = [...postagem, novaPostagem]
    setPostagem(novaListaDePostagem)
  }

  

  const arrayDePosts = postagem.map((post, index) =>{
    return ( 
         <div key={index}> 
              <Post 
              nomeUsuario={post.nomeUsuario} 
              fotoUsuario={post.fotoUsuario} 
              fotoPost={post.fotoPost} 
              />
         </div>
      
    )
  });
 
return (
  <div className='MainContainer'>
    <Form>
        <label>Seu Nome:</label>
        <input
          placeholder='Insira um nome'
          value={inputNomeUsuario}
          onChange={handleInputNomeUsuario}
        />
        
        <label>Sua Foto:</label>
        <input
          
          placeholder='URL Imagem de perfil'
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
        />
         <label>URL Imagem:</label>
        <input
          
          placeholder='URL Imagem'
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />
        <button onClick={addPostagem}>Adicionar</button>
      </Form>
    


    {arrayDePosts}

    {console.log(arrayDePosts)}
  </div>

)

}

export default App;

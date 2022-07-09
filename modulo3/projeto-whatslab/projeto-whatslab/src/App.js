import React, {useState} from 'react';
import {Main} from './components/styled'

function App() {

  // estados
  const [inputNome, setInputNome]= useState("")
  const [inputMensagem, setInputMensagem] = useState("")
  const [mensagens, setMensagem] = useState([])

  //eventos 
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }


  // Adicionar Mensagem
  const adicionarMensagem = (e) => {
    e.preventDefault(); 
    
    
     const novaPostagem = {nome:inputNome , mensagem:inputMensagem }
     const novaMensagem = [...mensagens, novaPostagem]
    setMensagem(novaMensagem)
  }

  const listaDeMensagens = mensagens.map((postagem) =>{
    return (
    <p key={postagem}>
      <p>{postagem.nome}</p>
      <p>{postagem.mensagem}</p>
      </p>
      ) 
    })

  return (
    <Main>
      <form>
        <label>Nome:</label>
        <input
          placeholder = "Nome"
          onChange={handleInputNome}  
          value={inputNome}  
        />

        <label>Mensagem:</label>
        <input
          placeholder = "Mensagem"
          onChange={handleInputMensagem}
          value={inputMensagem}
         />
        <button
        onClick={adicionarMensagem}
        >Enviar</button>

      </form>
      {listaDeMensagens}
    </Main>
    
  );
}

export default App;

import React, {useState} from 'react';
import logoLabenu from './img/LogoLabenu.jpg';
import {Container} from './components/styled';
import {Header} from './components/styled';
import {Main} from './components/styled';
import {Footer} from './components/styled';


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
    setInputNome("")
    setInputMensagem("")
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

    <Container>

    <Header>
      <img src={ logoLabenu } alt={"logo Labenu"} />
      <h1>WhatsLab</h1>
    </Header>

    <Main>
      <section></section>

      <div>
        <form>
          <label>Nome:</label>
          <input
          placeholder = "Usuário"
          onChange={handleInputNome}  
          value={inputNome}  
        />

          <label>Mensagem:</label>
          <input
          className='inputModificado'
          placeholder = "Digite uma mensagem"
          onChange={handleInputMensagem}
          value={inputMensagem}
         />
          <button
           onClick={adicionarMensagem}
          >Enviar</button>

        </form>
      </div>

      <section></section>
      {listaDeMensagens}
    </Main>

    <Footer>
      <p>Copyright  © 2022 Labenu All rigths reserved. R. Pais leme, 215, Conjunto 820 Pinheiros. Cep 05424-150</p>
    </Footer>
  </Container>











   
    
  );
}

export default App;

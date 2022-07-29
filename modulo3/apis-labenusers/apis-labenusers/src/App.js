import './App.css';
import {TelaLista} from './components/TelaLista';
import {TelaCadastro} from './components/TelaCadastro';
import React, {useState} from 'react'

function App() {

  const [state, setState] = useState(1);

  const renderizarPaginas = () => {
    switch (state){
      case 1:
        return <TelaCadastro></TelaCadastro>;
      case 2:
        return <TelaLista></TelaLista>;
      default:
        alert("Ocorreu um erro!")
    }
  }

  const trocarPagina = () => {
    setState(state+1)
  }

  const voltarPagina = () => {
    setState(state-1)
  }

  return (
    <div className="App">
      {renderizarPaginas()}
      <br/>
      {state === 1 ? (
        <button onClick={trocarPagina}>Próxima Página</button>
      ) : <br></br>     
    }
       <br/>
      {state === 2 ? (
        <button onClick={voltarPagina}>Voltar</button>
      ) : <br></br> }
    </div>
  );
}

export default App;

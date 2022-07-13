import './App.css';
import React, {useState} from 'react';
import {Etapa1} from './components/Etapa1';
import {Etapa2} from './components/Etapa2';
import {Etapa3} from './components/Etapa3';
import {Final} from './components/Final';



function App() {

  const [state, setState] = useState(1);

  const  renderizarEtapa = () => {
    switch (state){
       case 1:
          return <Etapa1/>;
       case 2:
           return <Etapa2/>;
       case 3:
           return <Etapa3/>;
        case 4:
           return <Final/>;
        
       default:
        alert("Ocorreu um erro")
    }
  }

  const irParaProximaEtapa = () => {
    setState(state+1)
  }

  return (
    <div className="App">
         {renderizarEtapa()}
      <br />
      {state < 4 ? (
        <button onClick={irParaProximaEtapa}>Próxima etapa</button>
      ) : <br/>}
    </div>
  )
}

export default App;

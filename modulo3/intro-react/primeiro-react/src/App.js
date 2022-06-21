
import foto from './img/foto.png';
import './App.css';

function App() {
  function mensagem(){
    alert("Boa noite")
  }
  return (
    <div className="App">
      <h1>Olá! Eu sou a Julia!</h1>
      <img src={foto} alt="foto perfil"></img>
      <p>Este é o meu primeiro react</p>
      <button onClick={mensagem}>Aperte este botão</button>
      




    </div>
  );
}

export default App;

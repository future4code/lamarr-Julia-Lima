import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/foto.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {foto}
          nome="Julia Marques" 
          descricao="Oi, eu sou Julia Marques. Estudante de Desenvolvimento Full Stack Web na Labenu, a melhor Escola de Programação."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="smallcard-container">
        <CardPequeno
          nome="Email: "
          imagem="https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/12/apos-50-anos-por-que-o-e-mail-ainda-e-fundamental-para-a-comunicacao-atual.jpg?resize=800%2C467&ssl=1" 
          descricao="juliamarques00@hotmail.com" 
        />
         </div>

      <div className="smallcard-container">
        <CardPequeno
          imagem="https://www.centrooestetransportes.com.br/upload/services/a601052cf592355f9211b7d054cad0b6.jpg" 
          nome="Endereço:"
          descricao=" Rio de Janeiro, Brasil" 
        />
         </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.aboz.org.br/img/odontologia/odontologia-1.jpg" 
          nome="Odontologia" 
          descricao="Sou graduada em odontologia. Portanto, atualmente tenho 6 anos de experiência na área odontológica!" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5nVR28Ehlrax3IAo5yIwYH33zhJ71R_QSA&usqp=CAU" 
          nome="Inglês" 
          descricao="Tenho fluência em inglês. Em 2014 realizei uma Graduação Sanduíche de 1 ano e 6 meses na Irlanda." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

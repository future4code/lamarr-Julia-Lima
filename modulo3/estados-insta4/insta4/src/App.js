import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import {ItemLista} from './styled'


function App() {
  const arrayDeInformacoes = [
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
  ]

  const arrayDePosts = arrayDeInformacoes.map((post, index) =>{
    return ( 
         <ItemLista key={index}> 
              <Post 
              nomeUsuario={post.nomeUsuario} 
              fotoUsuario={post.fotoUsuario} 
              fotoPost={post.fotoPost} 
              />
         </ItemLista>
      
    )
  });
 
return (
  <div className='MainContainer'>
    {arrayDePosts}

    {console.log(arrayDeInformacoes)}
  </div>

)

}

export default App;

import React from 'react';
import UseRequestData from './hook/UseRequestData';
import {Router} from './pages/Router'



function App() {

  return (
    <div >
      {requestData.map((data) => { 
        return <p> {data.name},
         {data.age} ,
         {data.applicationText},
         {data.profession},
         {data.country} </p>

      })}


      <Router/>
    </div>
  );
}

export default App;

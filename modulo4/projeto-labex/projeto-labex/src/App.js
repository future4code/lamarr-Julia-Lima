import React from 'react';
/* import useForm from '../hook/useForm'; */
import {Router} from './Routes/Router'



function App() {

  return (
    <div >
      {/*  {requestData.map((data) => { 
        return <p> {data.name},
         {data.age} ,
         {data.applicationText},
         {data.profession},
         {data.country} </p>

      })}   */}


      <Router/>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import { HomePage } from './components/Homepage/HomePage';
import { MatchesPage } from './components/MatchPage/MatchesPage'

function App(props) {

  const [page, setPage] = useState ("inicial")

  const changePage = (page) => {
    setPage(page)
  }

  const renderPage = () => {
    switch (page){
      case "inicial":
        return <HomePage changePage={changePage}/>
      case "matches":
        return <MatchesPage changePage={changePage}/>
      default:
        return null;
    }
  }
 
  return (
    <div>
      {renderPage()}    
    </div>
  );
}

export default App;

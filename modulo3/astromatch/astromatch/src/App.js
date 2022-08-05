import { HomePage } from './pages/Homepage/HomePage';
/* import { MatchesPage } from './pages/MatchesPage';
import { DeletePage } from './pages/DeletePage';  */
import { GlobalStyle } from './GlobalStyle';
import {Card} from './components/Card/Card'
import {results} from './data/data'

function App() {
 
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <HomePage results={results} ></HomePage>
      <Card ></Card> 
          
    </div>
  );
}

export default App;

import {Card} from '../../components/Card/Card'
import {HomePageContainer} from "./style"


export function HomePage(props){

    const {results} = props
    
    const renderList = results.map((pessoa, index) => {
        return (
            <div>
               <Card key={index} >
                   <p>name={pessoa.name}</p>
                   <p>species={pessoa.species}  </p>
                   <img src={pessoa.img} alt="usuário"/>
                </Card>
             </div>      

        )
    } )



    return (

        <HomePageContainer>
            <main>
            {renderList}
            </main>
        </HomePageContainer>
        
        
    )
}

import './App.css'
import { Joke } from './component/Joke' 
import JokeData from './component/JokeData'

function App() {
    const jokeElements = JokeData.map(joke => {
        // eslint-disable-next-line react/jsx-key
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
 


export default App

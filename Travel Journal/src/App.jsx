import './css/App.css'
import {Nav} from './components/Nav'
import {Places} from './components/Place'
const App= () =>{

  return (
    <>
      <Nav/>
      <div className='container'>
        {Places}
      </div>
    </>
  )
}

export default App;

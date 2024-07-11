/* eslint-disable react/jsx-key */
import {Head} from "./components/Head"
import {Hero} from "./components/Hero"
import  {cards} from "./components/card"

const App =() =>{
  return (
    <div>
      <Head/>
      <Hero/>
      <section className="card-list">
        {cards}
      </section>
      
    </div>
  )
}

export default App;

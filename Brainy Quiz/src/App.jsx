/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { Menu } from "./Menu"
import { Questions } from "./Questions"
import blob from './assets/blob.svg'
import { nanoid } from "nanoid"

function App() {
  const [started, setStarted] = useState(false)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [checked, setChecked] = useState(false)
  const [questions, setQuestions] = useState([])
  
  const start = () =>{
    setStarted(x => !x)
  }

  return (
    <div className="main-container">
      <div className="content-container">
      {started ?
        <div className="start-content-container">
            <div className="end-div">
              <button className="check">Check Answer</button>
            </div>
        </div>:<Menu start={start}/>
      }
      </div>
      <div className="blob">
        <img className="blob-svg" src={blob} alt="" />
      </div>
    </div>
  )
}

export default App

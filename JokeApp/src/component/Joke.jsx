/* eslint-disable react/prop-types */
export const Joke =(props)=>{
  return(
    <div>
      {props.setup && <h3> Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </div>
  )
}
/* eslint-disable react/prop-types */
export const Menu = (props) =>{
  return(
    <div className="menu">
      <h1 className="page-title">Brainy-Quiz</h1>
      <span className="page-description">Description</span>
      <button className="start-button" onClick={()=> props.start()}>Start Quiz</button>
    </div>
  )
}
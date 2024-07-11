import world from '../assets/world.png'
import '../css/App.css'

export const Nav = ()=>{
  return(
    <div className='nav-container'>
      <div className='title-container'>
        <img src={world} className='nav-img' />
        <span className='nav-p'>My Travel Journal</span>
      </div>
    </div>
  )
}
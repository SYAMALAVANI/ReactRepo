/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import '../css/App.css'
import {Data} from '../data.js'
import location from '../assets/location.png'
export const Place =(props)=>{

  return(
    <div className='content-container'>
      <div className='left-container'>
        <img src={props.details.imageUrl} alt='error loading' className='image'/>
      </div>
      <div className='right-container'>
        <div className='place-location'>
          <img src={location} className='location-pointer' />
          <span className='city-name'>{props.details.location} </span>
          <a className='link' href={props.details.googleMapsUrl} target='blank'>View on Google Maps</a>
        </div>
        <div className='heading'>
            <h1 className='title'>{props.details.title} </h1>
        </div>
        <div className='content'>
          
          <h4>Best time to visit: <em>{props.details.bestTime}</em></h4>
          <p>{props.details.description}</p>
        </div>
      </div >
    </div>
  )
}

export const Places = Data.map(item =>{
  return(
    <Place
    key={item.id}
    details = {item}
    />
  )
})
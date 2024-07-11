/* eslint-disable react/prop-types */
import data from '../data'
import star from '../assets/star.png'
import "../css/App.css"
export const Card = (props) =>{
  let badgeText
    if (props.openSpots === 0){
      badgeText = 'SOLD OUT'
    }else if(props.location === 'Online'){
        badgeText = 'ONLINE'
    }
  return(
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText} </div>}
      <img src={`${props.coverImg}`} className='card-img'/>
      <div className='card-stats'>
        <img src={star} className='card-star'/>
        <span className='gray'>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount})  • &nbsp;</span>
        <span>{props.location}</span>
      </div>
      <p className='title'>{props.title}</p>
      <p className='para'><span><strong>From ${props.price}</strong></span> / person</p>
    </div>

  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const cards = data.map(item => {
  return (
      <Card 
          key={item.id}
          // item={item}
          {...item}
      />
  )
}) 

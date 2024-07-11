import "../css/App.css"
import sectionLogo from "../assets/Group77.png"

export const Hero = () =>{
  return(
    <section className="hero">
      <img src={sectionLogo} className="hero-photo"/>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text"><em> Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</em></p>
    </section>
  )
}
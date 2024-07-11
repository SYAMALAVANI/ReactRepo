import Logo from '../assets/Troll.png'
import '../css/header.css'

export const Header = () => {
    return (
        <header className="header">
            <img 
                src = {Logo}
                className="header-image1"
            />
            <h2 className="header-title">Meme Generator</h2>
            <img 
                src = {Logo}
                className="header-image2"
            />
        </header>
    )
}
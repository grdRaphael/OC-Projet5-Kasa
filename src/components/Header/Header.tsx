import logo from '../../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo kasa" className='header_logo' />
            <nav className='header_nav'>
                <NavLink to="/" className="nav_link" end>Acceuil</NavLink>
                <NavLink to="/a-propos" className="nav_link">A Propos</NavLink>
            </nav>

        </header>
    )
}

export default Header
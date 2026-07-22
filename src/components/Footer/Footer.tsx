import logo from "../../assets/white_LOGO.svg"
import "./Footer.scss"
const Footer = () => {
    return (
        <footer>
            <div className="footer_content">
                <img src={logo} alt="logo kasa" className="footer_logo" />
                <p className='footer_copyright'>© 2020 Kasa. All
                    <br className="footer_break" /> rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer
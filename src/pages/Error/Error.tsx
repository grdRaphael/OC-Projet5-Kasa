import { Link } from "react-router-dom"
import "./Error.scss"
const Error = () => {
    return (
        <section className="error">
            <h1 className="error_code">404</h1>
            <p className="error_message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_link">Retourner sur la page d'accueil</Link>
        </section>

    )
}

export default Error
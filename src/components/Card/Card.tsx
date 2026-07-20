import "./Card.scss"
import { Link } from "react-router-dom"


type CardProps= {
    image: string;
    alt:string;
    title: string;
    id: string;
}

const Card = ({image, alt, title, id}: CardProps) => {
return(
    <Link to={`/logement/${id}`} className="card">  
        <img className="card_image"
        src={image} 
        alt={alt} />
        <h2 className="card_title">{title}</h2>
    </Link>
)
}

export default Card
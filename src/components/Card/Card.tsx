import "./Card.scss"

type CardProps= {
    image: string;
    alt:string;
    title: string;
}

const Card = ({image, alt, title}: CardProps) => {
return(
    <div className="card">  
        <img className="card_image"
        src={image} 
        alt={alt} />
        <h2 className="card_title">{title}</h2>
    </div>
)
}

export default Card
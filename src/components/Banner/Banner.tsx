import "./Banner.scss"

type BannerProps = {
    image: string;
    title: string;
    alt: string;
}

const Banner = ({ image, title, alt }: BannerProps) => {
    return (

        <div className="banner_content">
            <h1 className="banner_title">{title} </h1>
            <img src={image} alt={alt} className="banner_img"/>
        </div>
    )
}

export default Banner
import "./Banner.scss"

type BannerProps = {
    image: string;
    title: string;
    alt: string;
    hiddenTitle: boolean;
}

const Banner = ({ image, title, alt, hiddenTitle }: BannerProps) => {
    
    return (

        <div className="banner_content">
            <h1 className={hiddenTitle ? "banner_title sr_only" : "banner_title"}>{title} </h1>
            <img src={image} alt={alt} className="banner_img"/>
        </div>
    )
}

export default Banner
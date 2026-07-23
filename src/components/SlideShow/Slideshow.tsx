import { useEffect, useState } from "react";
import nextButton from "../../assets/nextButton.svg"
import prevButton from "../../assets/prevButton.svg"
import './Slideshow.scss'


type SlideShowProps = {
    pictures: string[];
    alt: string
}

const SlideShow = ({ pictures, alt, }: SlideShowProps) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const nextIndex = pictures.length - 1 !== index ? index + 1 : 0;
        const prevIndex = index ? index - 1 : pictures.length - 1;

        const nextImg = new Image()
        nextImg.src = pictures[nextIndex]

        const prevImg = new Image()
        prevImg.src = pictures[prevIndex]

    }, [index, pictures])

    if (pictures.length === 1) {
        return (
            <div className="housing_carousel">
                <img className="housing_image" src={pictures[index]} alt={alt} />
            </div>
        )
    }

    return (
        <div className="housing_carousel">
            <button className="prev_button carousel_buttons"
                onClick={() => setIndex(index ? index - 1 : pictures.length - 1)} >
                <img src={prevButton} alt="bouton précédent" decoding="async" />
            </button>
            <button className="next_button carousel_buttons"
                onClick={() => setIndex(pictures.length - 1 !== index ? index + 1 : 0)}>
                <img src={nextButton} alt="bouton suivant" decoding="async"/>
            </button>
            <img className="housing_image" src={pictures[index]} alt={alt} />
        </div>
    )
}

export default SlideShow
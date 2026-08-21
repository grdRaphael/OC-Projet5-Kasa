import { useParams } from "react-router-dom"
import data from "../../../data/data.json"
import Collapse from "../../components/Collapse/Collapse"
import './Housing.scss'
import SlideShow from "../../components/SlideShow/Slideshow"
import type { Lodging } from "../../types/lodging"
import starEmpty from '../../assets/starEmpty.svg'
import starFilled from '../../assets/starFilled.svg'
import Error from "../Error/Error"



const Housing = () => {

    const { id } = useParams()

    const getHousingById = (id: string | undefined): Lodging | undefined => {
        return data.find(element => element.id === id)
    }

    const housingDetail = getHousingById(id)


    if (!housingDetail) {
        return (<Error />)
    }

    const rating = Number(housingDetail.rating)

    const [firstName, ...rest] = housingDetail.host.name.split(" ")

    return (
        <>
            <SlideShow pictures={housingDetail.pictures} alt={housingDetail.title} />

            <section className="housing_info">

                <div className="housing_summary">
                    <div className="housing_identity">
                        <h1 className="housing_title">{housingDetail.title}</h1>
                        <p className="housing_location">{housingDetail.location}</p>
                    </div>
                </div>
                <ul className="housing_tags">
                    {housingDetail.tags.map(tag => (
                        <li key={tag} className="housing_tag">{tag}</li>
                    ))}
                </ul>

                <div className="housing_host">
                     <div className="housing_host_rating">
                        <p className="sr_only">Note de {housingDetail.rating} sur 5</p>
                        {[1, 2, 3, 4, 5].map((n: number) => (
                            <img
                                key={n}
                                src={n <= rating ? starFilled : starEmpty}
                                alt=""
                            />
                        ))}
                    </div>
                    <p className="housing_host_name">
                        <span>{firstName}</span>
                        <span>{rest.join(" ")}</span>
                    </p>
                    <div className="housing_host_avatar">
                        <img className="housing_host_picture"
                            src={housingDetail.host.picture}
                            alt={housingDetail.host.name}
                        />
                    </div>
                </div>

                <div className="housing_collapses">
                    <Collapse title="Description">
                        {housingDetail.description}
                    </Collapse>
                    <Collapse title="Équipements">
                        <ul className="housing_equipments">
                            {housingDetail.equipments.map(equipement => (
                                <li key={equipement}>{equipement}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </section>
        </>
    )
}

export default Housing
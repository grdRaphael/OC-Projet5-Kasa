import { Navigate, useParams } from "react-router-dom"
import data from "../../../data/data.json"
import Collapse from "../../components/Collapse/Collapse"
import './Housing.scss'
import SlideShow from "../../components/SlideShow/Slideshow"


const Housing = () => {
    const getHousingById = (id: string | undefined) => {
        return data.find(element => element.id === id)
    }

    const { id } = useParams()


    const housingDetail = getHousingById(id)


    if (!housingDetail) {
        return (<Navigate to="/route-inexistante" replace />
        )
    }


    return (
        <>
            <SlideShow pictures={housingDetail.pictures} alt={housingDetail.title} />

            <section className="housing_info">

                <div className="housing_summary">
                    <div className="housing_identity">
                        <h1 className="housing_title">{housingDetail.title}</h1>
                        <p className="housing_location">{housingDetail.location}</p>
                    </div>

                    <div className="housing_host">
                        <p className="housing_host_name">{housingDetail.host.name}</p>
                        <div className="housing_host_avatar">
                            <img className="housing_host_picture"
                                src={housingDetail.host.picture}
                                alt={housingDetail.host.name}
                            />
                        </div>
                    </div>
                </div>

                <ul className="housing_tags">
                    {housingDetail.tags.map(tag => (
                        <li key={tag} className="housing_tag">{tag}</li>
                    ))}
                </ul>

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
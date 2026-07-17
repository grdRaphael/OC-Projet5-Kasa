import Banner from "../../components/Banner/Banner"
import paysage from "../../assets/paysage_2.webp"
import Collapse from "../../components/Collapse/Collapse"
import aboutList from "../../../data/aboutList.json"
import "./About.scss"
import icon from '../../assets/Vector_down.svg'

const About = () => {
    return (
        <>
            <section>
                <Banner image={paysage}
                    alt='paysage'
                    title="" />
            </section>
            <section className="about_list">
                {aboutList.map(element => (
                    <Collapse key={element.title}
                    title={element.title}
                    icon={icon}
                    
                    />
                ))}
            </section>

        </>

    )
}

export default About
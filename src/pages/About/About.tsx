import Banner from "../../components/Banner/Banner"
import paysage from "../../assets/paysage_2.webp"
import Collapse from "../../components/Collapse/Collapse"
import aboutList from "../../../data/aboutList.json"
import "./About.scss"
import vectorUp from '../../assets/Vector_up.svg'
import vectorDown from "../../assets/Vector_down.svg"
import { useState } from 'react';


const About = () => {

    const [openTitle, setOpenTitle]= useState<string | null>(null)
    return (
        <>
            <section>
                <Banner image={paysage}
                    alt='paysage'
                    title="" />
            </section>
            <section className="about_list">
                {aboutList.map(element => (
                    <Collapse
                        key={element.title}
                        title={element.title}
                        icon={openTitle === element.title ? vectorUp : vectorDown }
                        isOpen={openTitle === element.title}
                        onToggle={() => setOpenTitle(openTitle === element.title ? null : element.title)}
                    >
                        {element.content}
                    </Collapse>
                ))}
            </section>

        </>

    )
}

export default About
import paysage from '../../assets/paysage.webp'
import Banner from '../../components/Banner/Banner'
import "./Home.scss"
import data from "../../../data/data.json"
import Card from '../../components/Card/Card'
import type { Lodging } from '../../types/lodging'

const Home = () => {
    return (
        <>
            <section>
                <Banner image={paysage}
                    alt="paysage"
                    title='Chez vous, partout et ailleurs'
                    hiddenTitle={false} />
            </section>

            <section>
                <div className='gallery'>
                    {data.map((housing: Lodging) => (
                        <Card
                            key={housing.id}
                            image={housing.pictures[0]}
                            alt={housing.title}
                            title={housing.title}
                            id={housing.id}
                        />
                    ))}
                </div>
            </section>
        </>



    )
}

export default Home 
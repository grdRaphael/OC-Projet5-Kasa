import paysage from '../../assets/paysage.webp'
import Banner from '../../components/Banner/Banner'
import "./Home.scss"
import data from "../../../data/data.json"
import Card from '../../components/Card/Card'

const Home = () => {
    return (
        <>
            <section>
                <Banner image={paysage}
                    alt="paysage"
                    title='Chez vous, partout et ailleurs' />
            </section>

            <section className='gallery'>
                {data.map(housing => (
                    <Card
                    key={housing.id}
                    image={housing.pictures[0]} 
                    alt={housing.title} 
                    title={housing.title} 
                    />
                ))}
            </section>
        </>



    )
}

export default Home 
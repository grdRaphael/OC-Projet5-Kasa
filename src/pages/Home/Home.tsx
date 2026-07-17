import paysage from '../../assets/paysage.webp'
import Banner from '../../components/Banner/Banner'
import "./Home.scss"

const Home = () => {
    return (
        <>
            <section>
                <Banner image={paysage}
                    alt="paysage"
                    title='Chez vous, partout et ailleurs' />
            </section>

            <section className='gallery'>

            </section>
        </>



    )
}

export default Home 
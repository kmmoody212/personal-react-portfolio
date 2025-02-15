import './css/homepage.css';
import fox from '../assets/ht_pudding_the_fox_03_mt_140821_16x9_992.jpg';

const Home = () => {
    return (
        <>
        <section className="section">
        <div>MOODY ENTERPRISES</div>
        <img src={fox}></img>
        <p>"Building Better Applications"</p>
        <div className="home-links">
            <a href="#">GH</a>
            <a href="#">IN</a>
            <a href="#">IG</a>
        </div>
        </section>
        </>
    )
}



export default Home;
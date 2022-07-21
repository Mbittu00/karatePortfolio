
import './home.css';
import Head from'./head'
import Hero from'./hero'
import Mide from'./mide'
import Foot from'./footer'
function Home() {
  return (
    <div className="Home">
    <div className='blur home-blur'></div>
    <Head/>
    <Hero/>
    <Mide/>
    <Foot/>
    </div>
  );
}

export default Home;
    
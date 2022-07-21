
import './hero.css';
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
  <div className='s-holder'>
    <motion.div className='slider'
   initial={{ x:-5 }}
          animate={{
            x:[-5,120,-5]
          }}
          transition={{ duration: 4,repeat: Infinity }} 
    ></motion.div>
<span>best karate academy in the town</span>
  </div>
  <div className='moti'>
  <div>
  <span className='stroke-text'>make</span>
  <span>your</span>
  </div>
  <div>
  <span>ideal</span>
  <span className='stroke-text'>fight</span>
  </div>
  </div>
  <div className='cont'>
<span>In here we will help you to shape<br/> and build your ideal body and live up<br/> your life to fullest</span>
  </div>
  
  <div className='count'>
  <div>
  <span>+ 2</span>
  <span>black<br/>belt</span>
  </div>

  <div>
  <span>+ 5</span>
  <span>members<br/>joind</span>
  </div>
  
  <div>
  <span>+ 2</span>
  <span>championship<br/>play</span>
  </div>
  
  </div>
  
  {/*buttons*/}
  <div className='btn'>
  <button>Get Started</button>
  <button>Learn More</button>
  </div>
  
    </div>
  );
}

export default Hero;
    
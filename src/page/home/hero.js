
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
  <span className='stroke-text'>Bring</span>
  <span>out</span>
  </div>
  <div>
  <span>the</span>
  <span className='stroke-text'>fighter</span>
  </div> 
  <div>
  <span className='stroke-text'>in</span>
  <span>you</span>
  </div>
  </div>
  <div className='cont'>
<span>A black belt is a white belt who never <br/>gives up
A black belt is much powerful than your leather one</span>
  </div>
  
  <div className='count'>
  <div>
  <span>+ 2</span>
  <span>black<br/>belt</span>
  </div>

  <div>
  <span>+ 5</span>
  <span>achivement<br/>gotted</span>
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
    
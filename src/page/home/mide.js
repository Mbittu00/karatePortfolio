import "./mide.css";
import { BiDumbbell, BiRupee } from "react-icons/bi";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { RiVipCrownFill, RiHeartAddLine } from "react-icons/ri";
import tick from "../../img/tick.png";
import whitetick from "../../img/whiteTick.png";
function Mide() {
  return (
    <div className="mide">
      <div className="ep" id='Programs'>
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      {/*card's*/}
      <div className="card">
        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Strength Training</span>
          <span>
            In this program, you are trained to improve your strength through
            many exercises
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>

        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Strength Training</span>
          <span>
            In this program, you are trained to improve your strength through
            many exercises
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>

        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Strength Training</span>
          <span>
            In this program, you are trained to improve your strength through
            many exercises
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>

        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Strength Training</span>
          <span>
            In this program, you are trained to improve your strength through
            many exercises
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>
      </div>
      {/*grid photo*/}

      <div className="us" id='whyUs'>
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>OVER 140+ EXPERT COACHS</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>OVER 140+ EXPERT COACHS</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>OVER 140+ EXPERT COACHS</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>OVER 140+ EXPERT COACHS</span>
        </div>
      </div>

      {/*price card*/}
      <div className="price" id='plan'>
      <div>
  <span className='stroke-text'>ready to start</span>
        <span>your journey</span>
  <span className='stroke-text'>now withus</span>
  </div>
  {/*yellow*/}
  <div className='blur pc-blur'></div>
        <div className='card-holder1 ch'>
        <div>
    <RiHeartAddLine size='30px' color='white'
    className='p-i'/>
          <span>basic plan</span>
          <div>
          <BiRupee size='35px' color='white'/>
          <span>500</span>
          </div>
          </div>
          <div>
            <div>
              <img src={whitetick} />
              <span>2 hours of exercises</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>2 hours of exercises</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>2 hours of exercises</span>
            </div>
          </div>
          <div className='pbtn'>
          <button>join now</button>
          </div>
        </div>
        
        
        <div className='card-holder2 ch'>
        <div>
          <RiVipCrownFill size='30px' color='#f48915' 
          className='p-i'/>
          <span>basic plan</span>
          <div>
         <BiRupee size='35px' color='white'/>
          <span>1500</span>
          </div>
          </div>
          <div>
            <div>
              <img src={whitetick} />
              <span>2 hours of exercises</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>2 hours of exercises</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>2 hours of exercises</span>
            </div>
          </div>
          <div className='pbtn'>
          <button>join now</button>
          </div>
        </div>
      </div>
      {/*about us*/}
      <div className="about" id='aboutUs'>
        <span>about us</span>
        <span>
          I made the right choice by choosing the Fitclub and by choosing the
          right plan and program I already achieved my ideal body!
        </span>
        <span>MATHEW HENDRICKSON -</span>
        <span>ENTREPRENEUR</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKuhAAbw4jth2eLsuE0n5aOzJD9P-kLj3Lw&usqp=CAU"
          className="sensai"
        />
        <div className='arrow'>
          <FiArrowLeft size="35px" color="white" />
          <FiArrowRight size="35px" color="white" />
        </div>
      </div>
    </div>
  );
}

export default Mide;

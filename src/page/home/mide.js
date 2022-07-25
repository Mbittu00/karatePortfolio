import "./mide.css";
import { BiDumbbell, BiRupee } from "react-icons/bi";
import { BsStars} from "react-icons/bs";
import { AiTwotoneStar} from "react-icons/ai";
import { FiArrowRight, FiArrowLeft} from "react-icons/fi";
import { RiVipCrownFill, RiHeartAddLine } from "react-icons/ri";
import tick from "../../img/tick.png";
import whitetick from "../../img/whiteTick.png";
function Mide() {
  return (
    <div className="mide">
      <div className="ep" id="Programs">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      {/*card's*/}
      <div className="card">
        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Self Defence</span>
          <span>
            In this program, you are trained to improve your strength through
            many exercises. Majority of those signing up for martial arts have
            personal safety as their main reason for training. Violence is a
            reality that is faced by everyone and martial arts training provides
            necessary skills to increase chances of survival. Students learn and
            practice risk avoidance and fighting skills that they can apply
            should their safety be at risk.
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>

        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Non Contact Fight</span>
          <span>
            In this program, you are trained to noncontact fight is the ability
            to act upon the rival without any visible physical contact with him,
            which appears to be the peak level of martial arts skill.
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>

        <div>
          <BiDumbbell size="30px" color="white" className="bi" />
          <span>Kata</span>
          <span>
            In this program, you are trained to katas offer a powerful and
            practical learning tool that not only teaches children proper
            technique, but also focus and visualisation skills as they
            transition through the motions in the sequence. Kata builds muscle
            memory in karate students so they react without hesitation if the
            need arises.
          </span>
          <div>
            <span>join now</span>
            <FiArrowRight size="20px" color="white" className="fi" />
          </div>
        </div>
      </div>
      {/*grid photo*/}

      <div className="us" id="whyUs">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>You will learn to defend yourself</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>Improve Strength & Power</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>Improve Stamina & Endurance</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>Improve Energy & Vitality</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>improve Confidence</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>Improve Self-Discipline</span>
        </div>{" "}
        <div className="tick">
          <img src={tick} />
          <span>Improve Inner Peace and Calmness</span>
        </div>
        <div className="tick">
          <img src={tick} />
          <span>
            we are provide in yearly 2 national and international championships.
          </span>
        </div>
      </div>

      {/*price card*/}
      <div className="price" id="plan">
        <div>
          <span className="stroke-text">ready to start</span>
          <span>your journey</span>
          <span className="stroke-text">now withus</span>
        </div>
        {/*basic Plan*/}
        <div className="blur pc-blur"></div>
        <div className="card-holder1 ch">
          <div>
            <RiHeartAddLine size="30px" color="white" className="p-i" />
            <span>Basic Plan</span>
            <div>
              <BiRupee size="35px" color="white" />
              <span>400</span>
            </div>
          </div>
          <div>
            <div>
              <img src={whitetick} />
              <span>karate traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>self defence traning</span>
            </div>{" "}
            <div>
              <img src={whitetick} />
              <span>2 day's traning in a week</span>
            </div>
          </div>
          <div className="pbtn">
            <button>join now</button>
          </div>
        </div>
{/*seilver plan*/}
        <div className="card-holder2 ch">
          <div>
            <AiTwotoneStar size="30px" color="silver" className="p-i" />
            <span>Silver Plan</span>
            <div>
              <BiRupee size="35px" color="white" />
              <span>600</span>
            </div>
          </div>
          <div>
            <div>
              <img src={whitetick} />
              <span>Karate traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>kickboxing traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>self defence traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>3 day's traning in a week</span>
            </div>
          </div>
          <div className="pbtn">
            <button>join now</button>
          </div>
        </div>
{/*gold Plan*/}
        <div className="card-holder3 ch">
          <div>
            <BsStars size="30px" color="gold" className="p-i" />
            <span>Gold Plan</span>
            <div>
              <BiRupee size="35px" color="white" />
              <span>1000</span>
            </div>
          </div>
          <div>
            <div>
              <img src={whitetick} />
              <span>parsonal Karate traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>parsonal self defence traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>2 day's traning in a week</span>
            </div>
          </div>
          <div className="pbtn">
            <button>join now</button>
          </div>
        </div>
{/*platinum Plan*/}
        <div className="card-holder4 ch">
          <div>
            <RiVipCrownFill size="30px" color="#ababab" className="p-i" />
            <span>platinum Plan</span>
            <div>
              <BiRupee size="35px" color="white" />
              <span>1200</span>
            </div>
          </div>
          <div>
            <div>
              <img src={whitetick} />
              <span>parsonal Karate traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>parsonal kickboxing traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>parsonal self defence traning</span>
            </div>
            <div>
              <img src={whitetick} />
              <span>3 day's traning in a week</span>
            </div>
          </div>
          <div className="pbtn">
            <button>join now</button>
          </div>
        </div>
      </div>
      {/*about us*/}
      <div className="about" id="aboutUs">
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
        <div className="arrow">
          <FiArrowLeft size="35px" color="white" />
          <FiArrowRight size="35px" color="white" />
        </div>
      </div>
    </div>
  );
}

export default Mide;

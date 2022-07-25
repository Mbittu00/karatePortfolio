import "./head.css";
import logo from "../../img/20220702_223447_0000.png";
import logo2 from "../../img/logo3.png";
import kai from "../../img/image-removebg-preview.png";
import soto from "../../img/shitoriyo-removebg.png";
import kio from "../../img/image-removebg-preview (1).png";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
function Head() {
  let width = window.innerWidth;
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const [ani, setAni] = useState({
    x: width
  });
  return (
    <div className="head" id='home'>
    <div>
    <div className='logo-h'>
      <img src={logo2} className="logo3" alt="logo3" />
      <img src={logo} className="logo2" alt="logo2" />
      </div>

      <span className='afilet'>Affiliated by</span>
  
      <div className='k-logo'>
      <img src={kai} className="logo" alt="logo" />
      <img src={kio} className="logo" alt="logo" />
      <img src={soto} className="logo" alt="logo" />
      </div>
      </div>
      {menuOpened == false &&mobile == true ? (
        <HiMenuAlt1
          color="#d8d5d5"
          size={35}
          className="menu"
          onClick={() => {
            setMenuOpened(true);
            setAni({x:-20})
          }}
        />
      ) :''}
       <motion.div className="menu-list"
       initial={{ x:width }}
          animate={ani}
          transition={{ duration: 0.5 }} >
          {mobile == true ? (
            <AiOutlineClose
              className="close"
              onClick={() => {
                setMenuOpened(false);
                setAni({x:width})
              }}
            />
          ) : (
            ""
          )}
         <a href='#home'>   <span
            onClick={() => {
              setMenuOpened(false);
              setAni({x:width})
            }}
          >
            Home
          </span></a>
          <a href='#Programs'>  <span
            onClick={() => {
              setMenuOpened(false);
              setAni({x:width})
            }}
          >
            Programs
          </span></a>
            <a href='#whyUs'><span
            onClick={() => {
              setMenuOpened(false);
              setAni({x:width})
            }}
          >
            Why us?
          </span></a>
        <a href='#plan'>    <span
            onClick={() => {
              setMenuOpened(false);
              setAni({x:width})
            }}
          >
            Plans
          </span></a>
        <a href='#aboutUs'>  <span
            onClick={() => {
              setMenuOpened(false);
              setAni({x:width})
            }}
          >
            About us
          </span></a>    
          <a href='#contact'>  <span
            onClick={() => {
              setMenuOpened(false);
              setAni({x:width})
            }}
          >
            Contact Us
          </span></a>
        </motion.div>
    </div>
  );
}

export default Head;

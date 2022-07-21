import "./footer.css";
import { BsInstagram , BsWhatsapp,BsFacebook} from 'react-icons/bs';
function Foot() {
  return (
    <div className="foot">
      <hr align="left" />
      <div className="f-moti">
        <div>
          <span className="stroke-text">READY TO</span>
          <span className='w'>LEVEL UP</span>
        </div>
        <div>
          <span className='w'>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
     
     <center>
      <div className="f-join">
        <input type="email"
        placeholder='Enter Your Email Address Here...'/>
        <button>join now</button>
      </div>
      </center>
        <div className='blur low-blur'></div>    
   <div className='low' id='contact'>
   <hr/>
   <div>
   <BsInstagram size='35px' color='white'/>
   <BsWhatsapp size='35px' color='white'/>
   <BsFacebook size='35px' color='white'/>
   </div>
   </div>
    </div>
  );
}

export default Foot;

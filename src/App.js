import { useEffect, useState } from 'react';
import './App.css';

import {useMediaQuery} from 'react-responsive'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faLinkedin,
faGithub,
faJs,
faReact,
faNodeJs,
faHtml5,
faCss3,
faGit,


} from "@fortawesome/free-brands-svg-icons";
import {useInView} from 'react-intersection-observer'
import { faArrowRight,faEye,faEnvelope, faPhone, faLocation} from "@fortawesome/free-solid-svg-icons";
import {motion,useAnimation} from  'framer-motion'
function App() {
  const showalert = ()=>{
    alert('soory! site is under construction will be back soon')
  }
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(()=>{
    if(inView){
      control.start('visible')
    }
 
    else{
      control.start('hidden')
    
    }
  },[control,inView])
  const [mobile,setmobile] = useState(false)
  const ismobile = useMediaQuery({query:'(max-width:400px)'})
  console.log(ismobile)
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }  },
  hidden: { opacity: 0, scale: 0 }
  }
  
  return (
  <div className='main'>
   <div className = 'navbar'>
      <div className='title'>Logo</div>
      <div className='search'>
        <input type='text' placeholder='dont search..'></input>
      </div>
      <a href='#/' onClick={()=>{setmobile(!mobile)}} className='toggle-button'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      {ismobile && mobile && <><div className='searchh'>
        <input type='text' placeholder='dont search..'></input>
      </div> <div className='navbar-linksh'>
       <ul>
         <li><a href='#/'>this links</a></li>
         <li><a href='#/'>go</a></li>
         <li><a href='#/'>no where</a></li>
       </ul>
     </div></>
      
      

      }
     
      <div className='navbar-links'>
        <ul>
          <li><a href='#/'>this link</a></li>
          <li><a href='#content'>go</a></li>
          <li><a href='#/'>no where</a></li>
        </ul>
      </div>
    </div>
    <div className='content'>
      <div className='static-text'>Hii I 'm  AswinKumar</div>
        <div className='dynamic-text'>
          <span>Web developer</span>
        </div>
        <div className='social'>
          <div className='linkedin'>
         <a href='https://www.linkedin.com/in/aswinkumar-ar-4b69161a5/' rel='noreferrer'  target='_blank'><FontAwesomeIcon className='icon' icon={faLinkedin} size = '2x'></FontAwesomeIcon></a>
          </div>
          <div className='gb'>
         <a href='https://github.com/Aswin2255'  rel='noreferrer'  target='_blank'><FontAwesomeIcon className='icon' icon={faGithub} size = '2x'></FontAwesomeIcon></a>
          </div>
        
        
       
     
          
        </div>
    </div>
    <div 
    className='about'>
      <div className='heading'>
        <motion.h1 
         ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        style={{margin:'1rem'}} >About</motion.h1>
      </div>
     <motion.div
       ref={ref}
       variants={boxVariant}
       initial="hidden"
       animate={control} className='about-content'>
      <div className='image'>
        <div className='img-container'>
        <img className='img' src='/aswin.jpg' alt=''></img>
        
        </div>
        
      
       
      </div>
      <div className='dsc'>
      
        <p>Hi i am Aswinkumar self taught software developer from kerala,kochi.i have experience in various web technologies like node js,express,react..etc.i love to solve real world problems</p>
        
        <div className='skill-container'>
        <div className='skill-logo'>
        <FontAwesomeIcon className='skillicon' size='2x' icon={faNodeJs}></FontAwesomeIcon>
        <FontAwesomeIcon className='skillicon' size='2x' icon={faJs}></FontAwesomeIcon>
        <FontAwesomeIcon className='skillicon' size='2x' icon={faReact}></FontAwesomeIcon>
        <FontAwesomeIcon className='skillicon' size='2x' icon={faHtml5}></FontAwesomeIcon>
        <FontAwesomeIcon className='skillicon' size='2x' icon={faCss3}></FontAwesomeIcon>
        <FontAwesomeIcon className='skillicon' size='2x' icon={faGit}></FontAwesomeIcon>
         

        </div>
      </div>
        
      </div>
     </motion.div>
    
    </div>
    <div className='skill'>
      <div className='heading'>
        <motion.h1 
        style={{margin:'1rem',color:'white'}}>Projects</motion.h1>
      </div>
      <motion.div 
      className='project-details'>
        <h1 className='project'><span className='arrow'>  <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></span>E-comerse application(shopmart)</h1>
        <div className='project-features'>
        <ul>
          <li>It has all the all the functionality like product listing,product search,product filter,product
             cancel,product return,wallet refund,order history, otp login</li>
          <li>In this project I integrated Paypal and Razorpay, for payment Twilo. For otp services , hbs
              as view engine</li>
          <li>I hosted the project in Aws Ec2 instance</li>
        </ul>
        </div>
        <div className='source-code'>
        <a href='https://github.com/Aswin2255/shopmart.git' rel='noreferrer'  target='_blank' ><button className='btn'>view Code  <FontAwesomeIcon className='icon' icon={faEye}></FontAwesomeIcon></button></a> 
          <a href='https://www.linkedin.com/posts/aswinkumar-ar-4b69161a5_nodejs-javascript-github-activity-7001880492769755136-vIw_?utm_source=share&utm_medium=member_desktop' rel='noreferrer' target='_blank'><button className='btn'>view Demo  <FontAwesomeIcon className='icon' icon={faEye}></FontAwesomeIcon></button></a>
        </div>
      </motion.div>
      
    </div>
    <div className='contact'>
    <div className='heading'>
        <h1 style={{margin:'1rem'}}>Contact</h1>
      </div>
      <div className='contact-container'>
          <div className='contact-links'>
            <div className='email'>
            <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
            <span style={{margin:'1rem'}}>mynameisaswin321@gmail.com</span>
            </div>
            <div className='phone'>
            <FontAwesomeIcon className='icon' icon={faPhone}></FontAwesomeIcon>
            <span style={{margin:'1rem'}}>9747419445</span>
            </div>
            <div className='addres'>
            <FontAwesomeIcon className='icon' icon={faLocation}></FontAwesomeIcon>
            <span style={{margin:'1rem'}}>Kochi,kerala</span>
            </div>

          </div>
          <div className='form'>
        
        <form>
          <div className='form-input'>
          <label>Name</label>
            <input placeholder='Enter the name' name='name' type='text'></input>
          </div>
          <div className='form-input'>
          <label>Email</label>
            <input  placeholder='Enter the email' type='text'></input>
          </div>
           <div className='form-input'>
           <textarea placeholder='Message'></textarea>
           </div>
           <div className='button'>
            <button onClick={showalert} className='btn'>Send message</button>
           </div>
           
          
        </form>
      


          </div>
      </div>
      
    </div>
    
  
    
   
  </div>
  
  );
}

export default App;

import { useState } from 'react';
import './App.css';

import {useMediaQuery} from 'react-responsive'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
faLinkedin,
faGithub,
faJs,
faReact,
faNodeJs,
faHtml5,
faCss3,
faGit,

} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight,faEye } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [mobile,setmobile] = useState(false)
  const ismobile = useMediaQuery({query:'(max-width:400px)'})
  console.log(ismobile)
  
  return (
  <div className='main'>
    <div className = 'navbar'>
      <div className='title'>Logo</div>
      <div className='search'>
        <input type='text' placeholder='search..'></input>
      </div>
      <a href='#/' onClick={()=>{setmobile(!mobile)}} className='toggle-button'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      {ismobile && mobile && <><div className='searchh'>
        <input type='text' placeholder='search..'></input>
      </div> <div className='navbar-linksh'>
       <ul>
         <li><a href='#/'>Home</a></li>
         <li><a href='#/'>About</a></li>
         <li><a href='#/'>Contact</a></li>
       </ul>
     </div></>
      
      

      }
     
      <div className='navbar-links'>
        <ul>
          <li><a href='#/'>Home</a></li>
          <li><a href='#/'>About</a></li>
          <li><a href='#/'>Contact</a></li>
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
          <FontAwesomeIcon className='icon' icon={faLinkedin} size = '2x'></FontAwesomeIcon>
          </div>
          <div className='gb'>
          <FontAwesomeIcon className='icon' icon={faGithub} size = '2x'></FontAwesomeIcon>
          </div>
          <div className='fb'>
          <FontAwesomeIcon className='icon' icon={faFacebook} size = '2x'></FontAwesomeIcon>
          </div>
          <div className='in'>
          <FontAwesomeIcon className='icon' icon={faInstagram} size = '2x'></FontAwesomeIcon>
          </div>
        
       
     
          
        </div>
    </div>
    <div className='about'>
      <div className='heading'>
        <h1 style={{margin:'1rem'}} >About</h1>
      </div>
     <div className='about-content'>
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
     </div>
    
    </div>
    <div className='skill'>
      <div className='heading'>
        <h1 style={{margin:'1rem',color:'white'}}>Projects</h1>
      </div>
      <div className='project-details'>
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
      </div>
      
    </div>
    <div className='contact'>
    <div className='heading'>
        <h1 style={{margin:'1rem'}}>Contact</h1>
      </div>
      <div className='form-input'>
        <form>
          <div className='form'>
          <label>Name</label>
            <input placeholder='Enter the name' type='text'></input>
          </div>
          <div className='form'>
          <label>Email</label>
            <input  placeholder='Enter the email' type='text'></input>
          </div>
           <div className='form'>
           <textarea placeholder='Message'></textarea>
           </div>
           <div className='button'>
            <button className='btn'>Send message</button>
           </div>
           
          
        </form>
      </div>

    </div>
    
  
    
   
  </div>
  
  );
}

export default App;

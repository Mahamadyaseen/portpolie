import logo from './logo.svg';
import './App.css';
import dp from './images/dp2.jpeg'
import Reacts from './images/react.png'
import next from './images/next.png'
import bootstrap from './images/bootstrap.png'
import ant from './images/ant.svg'
import postman from './images/postman.png'
import git from './images/git.png'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
function App() {
  const form = useRef()

  const handleSubmit=(e)=>
  {
    e.preventDefault();
          emailjs.sendForm('service_m0lulqv','template_qjz7y2q',form.current,"user_aJXEjtnBFRC3iXs66ubp9").then(res=>{
            alert("Message sended")
            console.log(res.text+"yaseen")
            .catch(error=>{console.log(error.text)})})
  }
  return (
   <>
   <div className="main">
     <div className="secondary">
          <div className="content-1">
          <img className="image mt-3" src={dp} alt="Personal Portfolio"/>
          <div className="banner-title-area pt--30">
              <h1 className="title mt-4">Hi, I’m <span className="name">Mahamad Yaseen</span><br/><span className="span"> Software
                      Engineer.</span></h1>
              <p className="disc mt-2">I'm the Front-End Developer for #Company in RandomTechie,<br/> OR. I have serious passion for UI effects, animations and creating <br/>intuitive, dynamic user experiences.</p>
          </div>
          <div className="btn-groups">
          <div className="btn mt-4">
            <p>Download My CV</p>
          </div>
         
    
          </div>
          </div>
          <div className='content-2'>
            <div className='about left-side'>
              <div >
                     <h5 className='leftside-title'>About Me</h5>
              
              <hr/>
              
              <p className="disc">Hi I am a Front-End developer & I can build your website as you want. And I have two years of experience in React js . Now I am able to design your portfolio.</p>
              
              <p className='disc'>I have  experience with HTML, CSS, JavaScript. And I can Design Your web application.. Also I have Knowledge of React Native</p>
              </div>
            </div>
            <div className='about left-side'>
              <div >
                     <h5 className='leftside-title'> My Skill</h5>
              
              <hr/>
              <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:"space-around"}}>
                  <div className='icons'><img src={Reacts} alt="icons"/></div>
                  <div className='icons'><img src={next} alt="icons"/></div>
                  <div className='icons'><img src={bootstrap} alt="icons"/></div>
                  <div className='icons'><img src={ant} alt="icons"/></div>
                  <div className='icons'><img src={postman} alt="icons"/></div>
                  <div className='icons'><img src={git} alt="icons"/></div>
                  <div className='icons'><img src="https://rainbowit.net/html/inbio/assets/images/icons/icons-18.png" alt="icons"/></div>
                  <div className='icons'><img src="https://rainbowit.net/html/inbio/assets/images/icons/icons-19.png" alt="icons"/></div>
                  <div className='icons'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="icons"/></div>
                  <div className='icons'><img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" alt="icons"/></div>
                  <div className='icons'><img src="https://pngset.com/images/library-of-javascript-icon-graphic-freeuse-files-logo-logo-javascript-icon-in-number-symbol-text-first-aid-transparent-png-1497709.png" alt="icons"/></div>
              </div>
              </div>
            </div>
            <div className='about left-side'>
              <div >
                     <h5 className='leftside-title'>My Services</h5>
              
              <hr/>
              <ul className="card-list">
                    <li>Website creation </li>
                    <li>Web Application</li>
                    <li>App Development</li>
                    <li>Mobile App Development </li>
               </ul>
              
              
              </div>
            </div>
            <div className='about left-side'>
              <div>
                     <h5 className='leftside-title'>Contact Me</h5>
              
              <hr/>
              <div className="row">

                   <form ref={form} onSubmit={handleSubmit}>
                   <div className="col-lg-12">
                        <div className="form-group">
                            <label for="name">Your Name</label>
                            <input className="form-control" name="name" id="name" type="text"/>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input className="form-control" name="phone" id="phone" type="text"/>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className="form-control form-control-sm" id="email" name="email" type="email"/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="subject">subject</label>
                            <input className="form-control form-control-sm" id="subject" name="subject" type="text"/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="message">Your Message</label>
                            <textarea  className="form-control" name="message" id="message"  rows="10"></textarea>
                        </div>
                    </div>

                     <div className="col-lg-12">
                       <input type="submit" name="submit" value="Send" className='btn btn-ld btn-ouline mt-2'/>
                    </div> 
                   </form>
                    </div>
              </div>
            </div>
          </div>
     </div>
   </div>
   </>
  );
}

export default App;

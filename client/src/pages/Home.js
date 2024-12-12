import './Home.css';
import Header from '../components/Header'
import profile from '../assets/profile3.png';
import HobiesSection from '../components/hobiesSection';
import Footer from '../components/Footer';
import LearnMore from '../components/LearnMore';
import TicTacToe from '../components/TicTacTo';


const Home = () => {
    return (  

<div className="home">
<Header/> 


{/* <div className="contant-container"> */}

  <section className="intro-section">

    <span className="intro-text">

  
    <span className="hi">Hello,
    {/* <div className="welcome-container"><span className="welcome">Welcome!</span></div> */}
    <svg viewBox="0 0 800 200"> {/* Increased dimensions */}
    <text 
        class="handwriting" 
        x="50%" 
        y="50%" 
        text-anchor="middle"
        dominant-baseline="middle"
    >
        Welcome!
    </text>
</svg>

    </span>


  <p className="name-intro"> I'm Mika Hurvits </p>
  <p className="title-intro">Computer Scientist | Mathematician | Human</p>
  {/* <p className='text-intro'>I am passionate about solving complex problems and always looking for ways to innovate and improve. I thrive on learning, collaboration, and making an impact.</p> */}
  </span> 
  {/* </link> */}

  <img src={profile}/>
  </section>

  {/* <HobiesSection/> */}
  


  {/* maybe add some feature projects (3 projects) */}


{/* <section className="cta-section"> 
  <div className="skills"> 
    <h2>Skills</h2>
    <p>Frontend</p>
    <p>Backend</p>
    <p>DevOps</p>
  </div>
</section>
*/}

{/* </div> */}
<TicTacToe/>
<LearnMore/>

<Footer/> 
</div>
    );
}
 
export default Home;

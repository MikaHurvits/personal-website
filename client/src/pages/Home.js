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


  {/* <p className="name-intro"> I'm Mika Hurvits </p> */}
  <p className="title-intro"> I'm Mika Hurvits </p>
  {/* <p className="title-intro">Computer Scientist | Mathematician | Human</p> */}
  

  
  </span> 
  {/* </link> */}

  <img src={profile}/>
  </section>

  <p className='intro-cv'>
I'm a software developer with expertise in cybersecurity, web development, and data analysis. With experience from elite intelligence units to industry leaders like Red Hat, I combine technical proficiency with a passion for solving complex problems.

My journey spans developing cluster optimization algorithms, creating threat assessment tools, and fine-tuning NLP models. I thrive in dynamic environments where I can apply my background in computer science and mathematics to build innovative solutions.

Whether crafting secure web applications, optimizing data processing systems, or mentoring the next generation of developers, I bring curiosity, collaboration, and a drive for excellence to everything I do.

Explore my portfolio to see how my technical skills and creative approach can benefit your next project.
  </p>
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
{/* <TicTacToe/> */}








<LearnMore/>

<Footer/> 
</div>
    );
}
 
export default Home;

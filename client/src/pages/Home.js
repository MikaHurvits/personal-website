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

  <div className='intro-cv'>


  <section id="introduction">
        <p>a software developer with over five years of experience in software development, web technologies, and networking research.</p>
        <p>My experience includes roles in both corporate and freelance environments, where I developed scalable solutions, automated processes, and contributed to research.</p>
    </section>
    
    <section id="skills">
        <h2>Basic Technical Skills and Areas Of Work: </h2>
        <ul>
            <li>Programming languages: Python, Java, C, JavaScript</li>
            <li>Web technologies: React, HTML, CSS, Node.js</li>
            <li>Databases: MongoDB, PostgreSQL</li>
            <li>Tools and frameworks: Git, Numpy, Pandas</li>
            <li>Core competencies: OOP, Data Structures, Algorithms</li>
            <li>Networking knowledge: HTTP/HTTPS, DNS, TCP/UDP, TLS, VPN, IPv4/IPv6</li>
        </ul>
    </section>
    
    <section id="education">
        <h2>Education: </h2>
        <p>Holds a B.Sc. in Computer Science and Mathematics from Tel Aviv University.</p>
    </section>
    
    <section id="community">
        <h2>Community Involvement: </h2>
        <p>Active community contributor at QueenB foundation, mentoring female high school students in Java and Python programming.</p>
    </section>

  </div>
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

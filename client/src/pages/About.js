import Header from "../components/Header";
// import profile2 from '../assets/mikaSmiling.png';

import profile2 from '../assets/mikaNY.png';

import mikaCamera from '../assets/mikaCamera.jpeg';
import mikaAlan from '../assets/mikaAlan1.jpeg';
import mikaVolleyball from '../assets/meWithaBall.jpg';
import sistersImg from '../assets/sisters2.JPG';
import alan from '../assets/alan.jpeg';

import parisStreet from '../assets/Views/parisStreet.JPG';

import italyRoed from '../assets/Views/italyRoad.JPG'
import TalkToMeAbout from '../components/TalktoMeAbout';
import HobiesSection from '../components/hobiesSection';

import './About.css';
import Footer from "../components/Footer";

const About = () => {
    const sushiRestaurants = ["Foo", "Moon (not the one on Bugrashov)", "Namos", "Nylon", "Nooch", "Umami", "TYO"];
    // const animals = ["Cats", "Dogs", "Parrots", "Hippopotamus", "Elephant", "Lion", "Sloth"];
    const mathematics = ["Calculus", "Linear Algebra", "Combinatorics", "Probability", "Graph Theory", "Number Theory", "Group Theory", "Topology", "Measure Theory", "Differential Geometry"];
    const computerScience = ["Algorithms", "Data Structures", "Operating Systems", "Computer Networks", "Machine Learning", "Microservice architecture", "OOP", "C/C++", "Java", "Python", ];
    const philosophy = ["Descartes", "Nietzsche", "Spinoza", "Leibniz", "Kant", "Aristotle"];
    


    return ( 
        <div className="about">
            <Header/>
            <h1 className="about-me-title">About Me</h1>
            <section className="about-me">
                <div className="about-me-text">
                <p>Hi there! I'm Mika Hurvits, a dedicated programmer and researcher with a strong foundation in computer science and mathematics.</p>

<p>With a proven experience working on large scale projects, I thrive on tackling complex challenges in both collaborative and independent settings.</p>

<p>I adore freindships and family is incredibly important to me, my two wonderful sisters, Daria and Rona are my best friends.</p>

<p>I'm also a proud cat mom to Alan, named after Alan Turing, whom I adopted in 2021.</p>

<p>My passion for mathematics and computer science drives my excitement for working in this ever-evolving field.</p>

<p>In my past, I was a professional volleyball player, a journey that taught me discipline and teamwork.</p>

<p>Outside of work, I love capturing moments and landscapes through photography, indulging my creative side.</p>

                </div>

                <img src={profile2} alt="profile"/>

            </section>

            <section className="my-photos">
                <img src={mikaCamera} alt="mika with camera" />
                <img src={italyRoed} alt="italy road" />
                <img src={sistersImg} alt="sisters" />
                <img src={mikaAlan} alt="alan" />
                <img src={mikaVolleyball} alt="volleyball" />
                <img src={parisStreet} alt="paris street" />
                {/* <img src={alan} alt="alan" /> */}

            </section>

            <HobiesSection/>


            <section className="interests-section">
            <h2>Talk to me about:</h2>
            <div className="interests-grid">
                <TalkToMeAbout 
                    category="Sushi Restaurants" 
                    interstsList={sushiRestaurants} 
                />
                {/* <TalkToMeAbout 
                    category="Animals" 
                    interstsList={animals} 
                /> */}
                <TalkToMeAbout 
                    category="Mathematics" 
                    interstsList={mathematics} 
                />
                <TalkToMeAbout 
                    category="Computer Science" 
                    interstsList={computerScience} 
                />
                <TalkToMeAbout 
                    category="Philosophy" 
                    interstsList={philosophy} 
                />
            </div>
        </section>

        {/* maybe add favorite qoutes, or favotite movies. Consider adding a recommondations page or section */}


        
 

        <Footer/>










        </div>

    );
}
 
export default About;
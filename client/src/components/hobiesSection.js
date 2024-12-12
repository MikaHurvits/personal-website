import "./hobiesSection.css";
import alan from '../assets/alanSitting.jpeg';
import beachVolleyball from '../assets/beachVolleyball.jpeg';


export default function HobiesSection() {


    const questions_and_answers = {
        1: ["Where I'm from:", "Born and Raised in Hod-Hasharon", "https://upload.wikimedia.org/wikipedia/commons/4/49/Hod_Hasjaron-a015.jpg"],
        2: ["My favorite animal:", "My Cat Alan (named after Alan Turing), is the love of my life", alan],
        3: ["My favorite sport:", "Volleyball. I played for 7 years in high school, stopped due to my military service and now I'm playing beach-volleybal for fun.", beachVolleyball],
        4: ["My favorite TV show:", "Friends.", "https://cdn.britannica.com/01/235601-050-895651AA/Friends-cast-television-series-1994.jpg"],
        //5: ["My favorite food:", "Sushi. I can eat it every day", "https://media.post.rvohealth.io/wp-content/uploads/2021/09/sushi-sashimi-732x549-thumbnail-732x549.jpg"],
        5: ["My favorite food:", "Sushi. I can eat it every day", "https://static.gamberorosso.it/2022/01/sushi-scaled.jpeg"],
        6: ["My favorite book:", "Twenty-Four Hours in the Life of a Woman by Stefan Zweig (has no competetors...)", "https://www.hamigdalor.co.il/media/thumb/460x460/products/24-%D7%A9%D7%A2%D7%95%D7%AA-%D7%91%D7%97%D7%99%D7%99-%D7%90%D7%99%D7%A9%D7%94_YMG.jpg"],
        
        
        // 7: ["My favorite music band:", "Arctric Monkeys", "hhttps://charts-static.billboard.com/img/2005/11/arctic-monkeys-4ey-344x344.jpg"],
        // 8: ["My favorite color:", "Blue. It's the color of the sky and the sea", "https://www.colorhexa.com/0000ff.png"],
        // 9: ["My favorite movie:", "The Notebook. It's a classic", "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"],
        }
    

    return(
        <div className="hobies-section-container">
            <h2>Some fun facts about me:</h2>
            <div className="hobies-section">
                {Object.entries(questions_and_answers).map(([number, [question, answer, image]]) => {
                    return (
                        <div key={number} className="hoby-card">
                            <h3>{question}</h3>
                            <p>{answer}</p>
                            <img className="hoby-image" src={image} alt="hoby image"/>
                        </div>
                    )
                })}
        </div>
        </div>
    )
}
import './TalktoMeAbout.css';

const TalktoMeAbout = ({category, interstsList}) => {
    return ( 
        <div className="talk-to-me-about">
            <h1> Talk to me About 
                <div>{category}:</div>
            </h1>
            <div className="interests-list">
                {interstsList.map((interest, index) => (
                    <p key={index}>{interest}</p>
                ))}
            </div>
        </div>
     );
}
 
export default TalktoMeAbout;
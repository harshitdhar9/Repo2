import profilePic from './assets/Penguin.jpeg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Penguin"></img>
            <h2 className="card-title">Harshit Dhar</h2>
            <p className="card-text">Learning React and trying to learn web development.</p>
        </div>
    );
}
export default Card
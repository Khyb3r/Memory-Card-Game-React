


function GameCard(props) {
    const cardName = props.cardName;

    return(
    <>
    <div className="card-container">
        <img src="./src/playing-card.webp" style={{maxWidth: "30px", maxHeight: "30px"}}/> 
        <p>Playing Card</p>
    </div>
    </>);

}
export default GameCard;



function GameCard(props) {
    const cardName = props.cardName;

    return(
    <>
    <div className="card-container">
        <img src={props.cardName}/>
    </div>
    </>);

}
export default GameCard;
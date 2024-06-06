import "../components/card.css"

function Card(props) {
   // const style = props.style;
   // const name = `${style.name} name `;
   // const price = `${style.price} price `;
    // let card;
    // Number(props.price === 550) 
    //     ? (card = "increase")
    //     : (card = {card});
    return (
        <div className={Card}>
        <div className={card}>
            <div className="name">{props.name}<span> Безлимитный </span>
         </div>
            <div className="price">
                {props.price} <span> руб/мес</span>
            </div>
            <div className="speed">до {props.speed} Мбит/сек</div>
            <div className="traffic">{props.traffic}</div>
        </div>
        </div>
    );
    );
}
export default Card;
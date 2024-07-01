    import "../components/card.css"

function Card(props) {
    const style = props.style;
    const name =  `${style.card} name_card`;
    const price =  `${style.card} price_card`;
    let card
   Number(props.price === 550)
    ? (card = 'card increase')
    : (card = 'card')
 return (
        <div className={card}>
           <div className={name}>{props.name}<span> Безлимитный </span>
            <div className={price}>
                {props.card} <span className="price_box"> руб/мес</span>
            </div>
         </div>
            <div className="speed">до {props.speed} Мбит/сек</div>
            <div className="traffic">{props.traffic}</div>
        </div>
     );
  }
export default Card;
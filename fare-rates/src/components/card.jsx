    import "../components/card.css"

function Card(props) {
    const style = props.style;
    const card =  `${style.card} rate_card `;
    let rate
    Number(props.rate === 550)
    ? (rate = 'card increase')
    : (rate = 'card');
 return (
        <div className={card}>
         <div className="name">{props.name}<span> Безлимитный </span>
         </div>
            <div className="price">
                {props.price} <span> руб/мес</span>
            </div>
            <div className="speed">до {props.speed} Мбит/сек</div>
            <div className="traffic">{props.traffic}</div>
        </div>
     );
  }
export default Card;
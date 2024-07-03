import "../components/card.css"
import {useState} from "react";


function Card(props) {
const [pressed, setPressed] = useState(false);
const handleChange = () => {
    setPressed(!pressed);
};
   const style = props.style;
    const name =  `${style.name}`;
    const price =  `${style.price} price_card`;
    let card
   Number(props.price === 550)
    ? (card = 'card increase')
    : (card = 'card')
 return (
        <div className ={card}>       
           <div className={name}>{props.name}<span> Безлимитный </span>
            <div className={price}>
                {props.card} <span className="price_box"> руб/мес</span>
            </div>
         </div>
            <div className="speed">до {props.speed} Мбит/сек</div>
            <div className="traffic">{props.traffic}</div>
         <button onClick = {handleChange}
        style={pressed ? {backgroundColor :"red" } :  {backgroundColor : "yellow"}}>
            Выбрать тариф
        </button>
        </div>
     );
  }
export default Card;
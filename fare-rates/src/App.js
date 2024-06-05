//import logo from './logo.svg';
import './App.css';
import data from './rates.json';

function Card(props) {
  return (
     <div className="card">
      <h2 className='name'>{props.name}</h2>
      <p className='price'>{props.price}</p>
      <p className='speed'>{props.speed}</p>
      <p className='traffic'>{props.traffic}</p>
          </div>
        );
}


function App() {
  return (
    <div className="App">
       {data.map((i) => (
                <Card
                    name={i.name}
                    price={i.price}
                    speed={i.speed}
                    traffic={i.traffic}
                                    />
                             ))}
    </div> );}

export default App;

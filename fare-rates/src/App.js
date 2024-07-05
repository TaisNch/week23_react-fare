import Card from './components/Сard';
import './App.css';
import style300 from './components/rate300.module.css';
import style450 from './components/rate450.module.css';
import style550 from './components/rate550.module.css';
import style1000 from './components/rate1000.module.css';


function App() {
  return (
   <div className='Cards'>
    <Card
    style= {style300}
    name="300"
    price={300}
    speed= '10'
    traffic = 'Объем включенного трафика не ограничен'
    />
    <Card
    style= {style450}
    name="450"
    price={450}
    speed= '50'
    traffic = 'Объем включенного трафика не ограничен' 
    />
    <Card
    style= {style550}
    name="550"
    price={550}
    speed= '100'
    traffic =  'Объем включенного трафика не ограничен'
    />
    <Card
    style= {style1000}
    name="1000"
    price={1000}
    speed= '200'
    traffic =  'Объем включенного трафика не ограничен'
    />
  </div>
 );
}
export default App;

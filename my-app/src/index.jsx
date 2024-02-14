import { createRoot } from 'react-dom/client';
import Product from './components/products';
import City from './components/city/city';
import { cities } from './cz-cities';
import './global.css';


const Time = ({ hours, minutes }) => (
  <div className="time">
    <span className="time__hours">{hours}</span>
    :
    <span className="time__mins">{minutes}</span>
  </div>
);

const number = [1,2,3];
const squares = number.map(n => n*n);
console.log(squares);

const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const mails = names.map(n => `${n}@seznam.cz `);
console.log(mails);

const User = ({ login }) => <div className="user__login">{login}</div>;
const logins = names.map(j => <User login={j}></User>);
console.log(logins);

const isEmail = (str) => str.includes('@');
const roll = () => Math.floor(Math.random() * 6) + 1;
const getNumber = (id) => Number(document.querySelector(`#${id}`).value);
const weather = (temperature) => (temperature > 16 ? 'teplo': 'zima');


const days = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];
//const list = days.map(dl => <li> {dl}</li>);
//console.log(list);

const list = [
  { product: 'mrkev', amount: '3ks', done: false },
  { product: 'paprika', amount: '2ks', done: true },
  { product: 'cibule', amount: '2ks', done: false },
  { product: 'čínské zelí', amount: '1ks', done: true },
  { product: 'arašídy', amount: '250g', done: false },
  { product: 'sojová omáčka', amount: '1ks', done: false },
];

const cities1 = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];


const App = () => (
  // <ul>
  //   {days.map(dl => <li> {dl}</li>)}
  // </ul>
  // <div>
  //   {list.map(m => <Product key={m.product} product={m.product} amount={m.amount} done={m.done}></Product>)}
  // </div>
//  <div>{cities.map(c => <div className="city" key={c}> {c.name} ma rozlohu {c.area} km<sup>2</sup>  </div>)}</div>
  <>
    <div className="container">{cities.map(c => <div><City key={c.name} name={c.name} population={c.population} area={c.area} district={c.district} photo={c.photo}></City></div>)}</div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);

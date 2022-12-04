import { useState} from 'react';
import AnimalShow from './AnimalShow';
import'./App.css';

function getRandomAnimal(){
  const animals = ['bird','cat','cow','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)]
}
// console.log(getRandomAnimal());

function App() {
  // const handleClick = () => {
  //   console.log('Button was clicked !')
  // }
  const [animals, setAnimals] = useState([]);

  const handleClick =()=>{
    // modifies a peice of state!!!
    // animals.push(getRandomAnimal())
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderedAnimals=animals.map((animal, index) => {
    return <AnimalShow  type={animal} key={index}/>
  })
  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      {/* <button onClick={()=>{console.log('Button was clicked')}}> Add Animal</button> */}
      {/* <div>{animals}</div> */}
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;

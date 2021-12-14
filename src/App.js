import './App.css';
import InputCard from './Components/InputCard';
import WeatherCard from './Components/WeatherCard';
import { useState } from 'react';


function App() {
  const[input,setInput]=useState("")

  const setInputHandler=(e)=>{
    setInput(e.target.value)
  }

  return (
    <div>
      <h1 className="heading">Weather App</h1>
      <div className="main-cards">
        <WeatherCard city={input} />
        <InputCard className="ic-comp" setInputHandler={setInputHandler}/>
      </div>
    </div>

  );
}

export default App;


import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city,setCity]=useState('patna');
  const [cityDetails,setCityDetails]=useState(null);
  useEffect(()=>{
    async function getDetails(){
      const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b02c6c301d274e292e13cb6ce448a1b&units=metric`);
      const response=await data.json();
      setCityDetails(response.main); 
    }
    getDetails();
  },[city])
  //  console.log(city);
console.log(cityDetails);
  return (
    <div className="App">
      <input placeholder='name' onChange={e=>setCity(e.target.value)}></input>

  {cityDetails? <div>
    <h5>temperature:${cityDetails.temp}℃</h5>
    <h5>humidity: ${cityDetails.humidity} </h5>
    <h5>pressure:${cityDetails.pressure}mph</h5>
  </div>:<p>enter city name</p>}

   </div>
  );
}

export default App;

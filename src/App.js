import './App.css';
import { useEffect, useState } from 'react';
import Container from './comp/Container';


function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState([]);
  const key = `b215f4d20f8f8f56025bdb7edd65ff7c`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`

  const getData = (e) =>{
    if(e.key == "Enter"){
      fetchData();
    }
  }
  console.log(data);

  const fetchData = () =>{
    fetch(url)
    .then(res => res.json())
    .then(data => { setData(data)})
  }

  return (
    <div className='App'>
      
      <input className='Input' type="text" value={city} placeholder = "Şehir Giriniz" onChange={(e)=>{setCity(e.target.value)}} onKeyDown = {getData}/>
      {data.length !== 0 && <Container data={data}/>}
    </div>
  );
}

export default App;

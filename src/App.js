import './App.css';
import getEvents from "./models/EventsModel";
import React, {useEffect,useState} from 'react';

function App() {
  const [events , setEvents ] = useState([]);
  const getCallEvents = async() => {
    const result = await getEvents.list();
    if(result){
      setEvents(result)
    }
  }
  useEffect(() => {
    getCallEvents()
    },[])
 
  return (
    <div className="App">
     {
       events && Array.isArray(events) && events.length > 0 && events.map(data => {<div className="event-item" ><img src={data.image}/><div>{data.title}</div></div>})
     }
    </div>
  );
}

export default App;

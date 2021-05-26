import './App.css';
import getEvents from "./models/EventsModel";
import React, {useEffect,useState} from 'react';

function App() {
  const [events , setEvents ] = useState([]);
  const getCallEvents = async() => {
    const result = await getEvents.list();
    console.log(result)
    if(result){
      setEvents(result)
    }
  }
  useEffect(() => {

    getCallEvents()
    },[])
 
    useEffect(()=> {console.log(events, "evnets", events && Array.isArray(events)&&events.length > 0 )},[events])
  return (
    <div className="App">
      <div className="event-list">
      {events && Array.isArray(events) && events.length > 0 && events.map(data => {
       return(       <div className="event-item" >
       <img src={data.image}/>
       <div>{data.name}</div>
     </div>)
     
          })
      }
      </div>
    
    </div>
  );
}

export default App;

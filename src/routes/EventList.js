import getEvents from "../models/EventsModel";
import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import "../App.css"
export default () => {
  const [events , setEvents ] = useState([]);
  const history = useHistory();
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
      <div className="event-list">
      {events && Array.isArray(events) && events.length > 0 && events.map(data => {
       return(
            <div className="event-item" onClick={() => history.push(`/detail/${data.id}`)}>
                <img src={data.image}/>
                <p>{data.name}</p>
            </div>)
     
          })
      }
      </div>
      );
}

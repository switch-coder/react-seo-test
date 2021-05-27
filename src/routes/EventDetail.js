import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet"
import eventDetailModel from "../models/EventDetailModel";

export default () => {
    const {id} = useParams();
    const [data, setData] = useState();
    console.log("detail")
    const getCallEventDetail = async(id) => {
        const result = await eventDetailModel.getEventDetail(id);
        if(result){
            setData(result)
        }
      }
    useEffect(() => {
        if(id){
            getCallEventDetail(id)
        }
    },[])
    useEffect(() => {console.log(data, "data",data && data.id && data.name && data.image)},[data])
    return ( 
        data && data.id && data.name && data.image?(  <div className="event-detail-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.name} | pexpo</title>
                <meta property="og:title" content={data.name} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={data.name} />
                <meta property="keywords" content={data.meta.join(",")}/>

            </Helmet>
        <h1>{data.name}</h1>
        <img src={data.image} className="event-detail-img" alt={data.name}/>
    </div>):null)
      
    

    
}
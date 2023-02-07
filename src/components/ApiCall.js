import React, { useEffect, useState } from "react";
import axios from '../axios';

const ApiCall = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
//   useEffect(() => {
//     axios
//       .get("https://kontests.net/api/v1/all")
//       .then((res) => setMyData(res.data))
//       .catch((error) => setIsError(error.message));
//   }, []);

  // using Async Await
   const getApiData = async () => {
    try{
        const res = await axios.get("/all");
        setMyData(res.data);
       }catch( error){
        setIsError(error.message);
    } } 

  useEffect(() =>{
      getApiData();
  }, [])

  return (

    <div className="container">
      <h1>Coding Contest Calender</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.map((all, idx) => {
          const { name, start_time, end_time, duration, site, url, status } = all;
        //   console.log(idx)
          return (
            <div className="card" key={idx}>
              <h5>{name}</h5>
              <p>
                <b>Start Time: </b>
                {start_time}
              </p>
              <p>
                <b>End Time: </b>
                {end_time}
              </p>
              <p>
                <b>Duration: </b>
                {duration}
              </p>
              <div className='para'>
                <p><b>Website: </b><br/><a href={url} target="_blank" rel="noreferrer">{site}</a></p>
               <p><b>Status: </b><br/>{status}</p>
               </div>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default ApiCall;

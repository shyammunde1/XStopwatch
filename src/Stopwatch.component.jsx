import React, { useEffect, useState } from "react";
import './stopwatch.css'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerStart, setTimerStart] = useState(false);

  const startHandler = () => {
    setTimerStart( !time);
  };
  const resetHandler = () => {
    setTime(0);
    setTimerStart(false)
  };

  useEffect(()=>{
    let watchStartAndStop;
    if(timerStart){
        watchStartAndStop=setInterval(() => {
          setTime(prevTime => prevTime + 1)
        },1000);
     }else{
        clearInterval(watchStartAndStop)
     }
     return () => clearInterval(watchStartAndStop)
  },[timerStart])
   
   const timeFormat=(seconds)=>{
        const min=Math.floor(seconds/60)
        const remainSeconds=seconds % 60
        return `${min}:${remainSeconds < 10 ? "0":""}${remainSeconds}`
   }
  
  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <p>Time:{timeFormat(time)}</p>
      <div>
        <button onClick={startHandler}>{timerStart ? "Stop" : "Start"}</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

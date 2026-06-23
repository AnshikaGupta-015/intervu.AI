import React from 'react'
import { buildStyles, circularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({ timeLeft, totalTime }) {
   
  const percentage = (timeLeft/totalTime)*100

  return (
    <div className='w-20 h-20'>
      <circularProgressbar
       value={percentage}
      text={`${timeLeft}%`}
      styles={buildStyles({
        textSize: "28px",
        textColor: "#ef4444",
        trailColor: "#e5e7eb",
        pathColor: "#10b981"
      })}
      />
      
    </div>
  )
}

export default Timer

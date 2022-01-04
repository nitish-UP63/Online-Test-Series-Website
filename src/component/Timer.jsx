import { positions, textAlign } from '@mui/system';
import React, { useState, useEffect } from 'react'

export default function Timer(props) {

    

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(props.minutes);

    useEffect(() => {
        
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });





    return (
        <div  >
            <div>Time Left - {minutes} min : {seconds} s</div>
            <div className='row'>
                {/* <button className='btn btn-primary' >{isActive ? 'Pause' : 'Start'}</button>
                <button className='btn btn-primary' onClick={reset} >Reset</button> */}
            </div>
        </div>
    )
}

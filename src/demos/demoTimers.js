import React, { useState, useEffect } from 'react';


import Timer from '../components/timer/timer';
import TimerFunction from '../components/timer/timerFunction';


function DemoTimers() {
    const [timerMs, setTimerMs] = useState(10000);
    const [showTimer, setShowTimer] = useState(false);
    const [timerInitial, setTimerInitial] = useState();

    const _handleTimerChange = e => {
        const value = e.target.value;
        if(value && !/^\d{0,8}$/.test(value)) {
            return;
        }
        setTimerMs(value);
    }

    useEffect(() => {
        setTimerInitial(timerMs);
    }, [showTimer]); // eslint-disable-line

    return (
        <div className="demo-timer-wrapper">
            <div className="row">
                <h3>Timers</h3>
            </div>
            <div className="row mt-1">
                <button className="btn-reset" onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
                <input className="timer-input" type="text" name="timerMs" value={timerMs} onChange={_handleTimerChange}/>ms
            </div>

            { showTimer &&
            <>
                <div className="row"><Timer timerMs={timerInitial}/></div>
                <div className="row"><TimerFunction timerMs={timerInitial}/></div>
            </>
            }
        </div>
    );
}

export default DemoTimers;

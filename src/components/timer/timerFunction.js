import React, { useState, useCallback, useEffect, useMemo } from "react";

import './timer.css'


let timeoutUpdate = null;

const TimerFunction = (props) => {
    const [remaining, setRemaining] = useState(props.timerMs || 0);
    const startTime = useMemo(() => new Date().getTime(), []);

    const _cleanUp = () => {
        if(timeoutUpdate) {
            clearInterval(timeoutUpdate);
        }
    }

    const _getTimerParts = () => {
        let miliseconds = remaining;
        let minutes = Math.trunc(miliseconds / (60*1000));
        miliseconds -= minutes * (60*1000);
        let seconds = Math.trunc(miliseconds / 1000);;
        miliseconds -= seconds * 1000;
        return { minutes, seconds, miliseconds };
    }

    const _padNumber = (value, padSize) => {
        return String(value).padStart(padSize, '0');
    }

    const _getRemainingTime = useCallback(() => {
        const timerMs = props.timerMs || 0;
        return Math.max(0, timerMs-(new Date().getTime()-startTime));
    }, [props.timerMs, startTime]);

    const _updateTimer = useCallback(() => {
        setRemaining(_getRemainingTime());
    }, [_getRemainingTime]);

    useEffect(() => {
        timeoutUpdate = setInterval(() => _updateTimer(), 10);
        return () => _cleanUp();
    }, [_updateTimer]);

    useEffect(() => {
        if(remaining<=0) {
            _cleanUp();
        }
    }, [remaining])

    const tp = _getTimerParts();
    return(
        <div className="timer-wrapper red">
            <div className="timer-content">
                {tp.minutes}:{_padNumber(tp.seconds, 2)}<span className="miliseconds">.{_padNumber(tp.miliseconds, 3)}</span>
            </div>
        </div>
    );
}

export default TimerFunction;
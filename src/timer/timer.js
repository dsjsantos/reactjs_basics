import React from "react";

import './timer.css'


let timeoutUpdate = null;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remaining: this.props.timerMs || 0,
            startTime: new Date().getTime()
        }
    }

    _cleanUp = () => {
        if(timeoutUpdate) {
            clearInterval(timeoutUpdate);
        }
    }

    _getRemainingTime = () => {
        const timerMs = this.props.timerMs || 0;
        return Math.max(0, timerMs-(new Date().getTime()-this.state.startTime));
    }

    _getTimerParts = () => {
        const remaining = this.state.remaining;
        let miliseconds = remaining;
        let minutes = Math.trunc(miliseconds / (60*1000));
        miliseconds -= minutes * (60*1000);
        let seconds = Math.trunc(miliseconds / 1000);;
        miliseconds -= seconds * 1000;
        return { minutes, seconds, miliseconds };
    }

    _padNumber = (value, padSize) => {
        return String(value).padStart(padSize, '0');
    }

    _updateTimer = () => {
        this.setState({ remaining: this._getRemainingTime() });
    }

    componentDidMount() {
        timeoutUpdate = setInterval(() => this._updateTimer(), 10);
    }

    componentWillUnmount() {
        this._cleanUp();
    }

    componentDidUpdate() {
        if(this.state.remaining<=0) {
            this._cleanUp();
        }
    }

    render() {
        const tp = this._getTimerParts();
        return(
            <div className="timer-wrapper">
                <div className="timer-content">
                    {tp.minutes}:{this._padNumber(tp.seconds, 2)}<span className="miliseconds">.{this._padNumber(tp.miliseconds, 3)}</span>
                </div>
            </div>
        );
    }
}

export default Timer;
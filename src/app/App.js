import React, { useState, useEffect } from 'react';

import './App.css';

import AppHeader from '../appHeader/appHeader';
import Timer from '../timer/timer';
import TimerFunction from '../timer/timerFunction';
import { CounterClass, CounterFunction } from '../counter';


function App() {
  const [resets, setResets] = useState(0);
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
    <div className="my-app">
      <AppHeader title="React Js Demo App" />

      <div className="app-counters">
        <div className="flex">
          <div className="row flex">
            <label className="item-label">Class Counter 1:</label>
            <CounterClass resetTrigger={resets} />
          </div>
          <div className="row flex">
            <label className="item-label">Class Counter 2:</label>
            <CounterClass resetTrigger={resets} initial={3} disableButton={{ increase: false, decrease: true }} />
          </div>
          <div className="row flex">
            <label className="item-label">Function Counter 1:</label>
            <CounterFunction resetTrigger={resets} initial={5} disableButton={{ increase: true }} />
          </div>
          <div className="row flex">
            <label className="item-label">Function Counter 2:</label>
            <CounterFunction resetTrigger={resets} initial={7} />
          </div>
        </div>
      </div>

      <div className="row mt-1">
        Couters were reset {resets} times.
      </div>

      <div className="row">
        <button className="btn-reset" onClick={() => setResets(resets+1)}>Reset Counters</button>
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

export default App;

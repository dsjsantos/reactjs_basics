import React, { useState } from 'react';

import './App.css';

import AppHeader from '../appHeader/appHeader';
import { CounterClass, CounterFunction } from '../counter';


function App() {
  const [resets, seResets] = useState(0);

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
        <button className="btn-reset" onClick={() => seResets(resets+1)}>Reset Counters</button>
      </div>



    </div>
  );
}

export default App;

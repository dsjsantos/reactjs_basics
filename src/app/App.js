import React from 'react';

import './App.css';

import AppHeader from '../appHeader/appHeader';
import { CounterClass, CounterFunction } from '../counter';

function App() {
  return (
    <div className="my-app">
      <AppHeader title="React Js Demo App" />

      <div className="row">
        <label className="item-label">Class Counter 1:</label>
        <CounterClass />
      </div>
      <div className="row">
        <label className="item-label">Class Counter 2:</label>
        <CounterClass initial={3} disableButton={{ increase: false, decrease: true }} />
      </div>
      <div className="row">
        <label className="item-label">Function Counter 1:</label>
        <CounterFunction initial={5} disableButton={{ increase: true }} />
      </div>
      <div className="row">
        <label className="item-label">Function Counter 2:</label>
        <CounterFunction initial={7} />
      </div>


    </div>
  );
}

export default App;

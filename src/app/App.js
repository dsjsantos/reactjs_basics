import React, { useState, useEffect } from 'react';

import './App.css';

import DateWithDatePicker from 'react-custom-date-field';

import AppHeader from '../appHeader/appHeader';
import { CounterClass, CounterFunction } from '../counter';
import Timer from '../timer/timer';
import TimerFunction from '../timer/timerFunction';
import TodoList from '../todoList/todoList';


function App() {
  const [resets, setResets] = useState(0);
  const [timerMs, setTimerMs] = useState(10000);
  const [showTimer, setShowTimer] = useState(false);
  const [timerInitial, setTimerInitial] = useState();
  const [dateValue1, setDateValue1] = useState(null);
  const [dateValue2, setDateValue2] = useState(null);
  const [dateErrorMessage1 ] = useState(null);
  const [dateValid1, setDateValid1] = useState(true);

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

      <div className="row">
        <h3>Date Input (with date picker)</h3>
        <form name='frmMain'>
          <div className='field-row-invalid-feedback'>
              <DateWithDatePicker
                id="fldDate1_ID"
                name="fldDate1"
                autoComplete={false}
                label="Date field 1"
                className="field-one"
                placeolder="Inform a date"
                floatingPlaceholder={false}
                disabled={false}
                requiredMark={true}
                initialValue={dateValue1}
                value={dateValue1}
                errorMessage={dateErrorMessage1 ? dateErrorMessage1 : (!dateValid1 ? "Invalid or incomplete" : "")}
                clearInvalidValueOnBlur={true}
                swapMonthAndDay={false}
                onChange={(val, valid) => { setDateValue1(val); setDateValid1(valid); }}
                datePicker={{ 
                    enabled: true,
                    locale: undefined,
                    offsetYAboveInput: 0,
                    offsetYUnderInput: 0,
                    minDate: "01/01/2023",
                    maxDate: "12/31/2030",
                    pickImageTitle: "Open date picker",
                    pickImageAlt: "date picker",
                    customTriggerContent: undefined
                }}
                customization={null}
              />

              <DateWithDatePicker
                id="fldDate2_ID"
                name="fldDate2"
                label={null}
                className="field-two"
                placeolder="Date field 2"
                floatingPlaceholder={true}
                disabled={false}
                requiredMark={false}
                initialValue={dateValue2}
                value={dateValue2}
                errorMessage={null}
                clearInvalidValueOnBlur={true}
                onChange={(val, valid) => setDateValue2(val)}
                datePicker={{
                    enabled: true
                }}
                customization={null}
              />
          </div>
        </form>
      </div>

      <div className="row">
        <h3>To do list</h3>
        <TodoList />
      </div>

    </div>
  );
}

export default App;

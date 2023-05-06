import React, { useState } from 'react';

import { CounterClass, CounterFunction } from '../components/counter';


function DemoCouters() {
  const [resets, setResets] = useState(0);

  return (
    <div className="demo-counters-wrapper">
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
    </div>
);
}

export default DemoCouters;

import React from 'react';

import './App.css';

import AppHeader from '../components/appHeader/appHeader';
import DemoCouters from '../demos/demoCouters';
import DemoTimers from '../demos/demoTimers';
import DemoDatePicker from '../demos/demoDatePicker';
import DemoToDoList from '../demos/demoToDoList';

function App() {
    return (
        <div className="my-app">
            <AppHeader title="React Js Demo App" />

            <DemoCouters />

            <DemoTimers />

            <DemoDatePicker />

            <DemoToDoList />
        </div>
    );
}

export default App;

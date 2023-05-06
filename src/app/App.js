import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';

import AppHeader from '../components/appHeader/appHeader';
import DemoCouters from '../demos/demoCouters';
import DemoTimers from '../demos/demoTimers';
import DemoDatePicker from '../demos/demoDatePicker';
import DemoToDoList from '../demos/demoToDoList';

const Home = () => {
    return(
        <>
            <h2>Welcome to React JS Demo App</h2>
            <p>This is a React demonstration App that shows different components usage.</p>
            <p>Navigate through demo pages to see usage examples and enjoy it.</p>
        </>
    )
}

function App() {
    return (
        <div className="my-app">
            <AppHeader title="React JS Demo App" />

            <section className="contet">
                <h2>Navigation</h2>

                <BrowserRouter>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home Page</Link></li>
                                <li><Link to="/counters">Demo 1 - Counter component examples</Link></li>
                                <li><Link to="/timers">Demo 2 - Timer component examples</Link></li>
                                <li><Link to="/datepicker">Demo 3 - Date Field component with Date Picker exemples</Link></li>
                                <li><Link to="/todo-list">Demo 4 - ToDo List component exemple</Link></li>
                                <li><Link to="/show-all">All - Show all demonstrations together</Link></li>
                            </ul>
                        </nav>
                        <hr/>

                        <Routes>
                            <Route exact path="/counters" element={<DemoCouters />} />
                            <Route exact path="/timers" element={<DemoTimers />} />
                            <Route exact path="/datepicker" element={<DemoDatePicker />} />
                            <Route exact path="/todo-list" element={<DemoToDoList />} />
                            <Route exact path="/show-all" element={
                                <>
                                    <DemoCouters />
                                    <DemoTimers />
                                    <DemoDatePicker />
                                    <DemoToDoList />
                                </>
                            } />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </section>

        </div>
    );
}

export default App;

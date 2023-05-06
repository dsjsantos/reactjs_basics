import React from "react";

import logo from './logo.svg';


const AppHeader = (props) => {
    return(
        <header className="my-app-header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1>{props.title}</h1>
        </header>

    )
}

export default AppHeader;
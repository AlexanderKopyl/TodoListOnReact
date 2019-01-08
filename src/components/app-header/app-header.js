import React from 'react';
import './app-header.css';

const AppHeader = () => {
    console.log();
    return(
        <div className="box-header">
            <h1>Todo List</h1>
            <div>
            <span className="badge badge-primary badge-pill">3</span>
            <span>more to do,</span>
            <span className="badge badge-primary badge-pill">0</span>
            <span>done</span>
            </div>
        </div>
    ) ;
};

export default AppHeader;
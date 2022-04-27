import React from 'react';
import ReactDOM from 'react-dom';
import { RootComp } from './root-comp';
import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
    <React.StrictMode>
            <Router>
                <RootComp />
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

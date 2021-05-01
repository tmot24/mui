import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './26Header/App';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

ReactDOM.render(
    <>
        <CssBaseline/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
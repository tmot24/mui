import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './04Button/App';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <div style={{
              display: "flex",
              justifyContent: "center",
              }}>
              <App/>
          </div>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
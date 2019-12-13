import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/main-router';

ReactDOM.render((
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
), document.getElementById('root'));

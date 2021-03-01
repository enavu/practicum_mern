//client/index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/App.js'
import Chart from './components/Chart.js'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
//ReactDOM.render(<App />, document.getElementById('root'));

  
  ReactDOM.render(
    <HashRouter>
    <Routes />
  </HashRouter>,
    document.getElementById('root')
  )
  
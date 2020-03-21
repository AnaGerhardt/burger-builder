import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components'
// import 'bootstrap/scss/bootstrap.scss';
import './assets/styles/main.css';

const app = (<BrowserRouter><App /></BrowserRouter>)

ReactDOM.render(
        app,
    document.getElementById('root')
)
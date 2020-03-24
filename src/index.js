import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { App } from './components'
// import 'bootstrap/scss/bootstrap.scss';
import './assets/styles/main.css';

const app = (<HashRouter><App /></HashRouter>)

ReactDOM.render(
        app,
    document.getElementById('root')
)
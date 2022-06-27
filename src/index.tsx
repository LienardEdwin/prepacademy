import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Movie from '../src/pages/moviedetail'
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="information/:movieId/:type" element={<Movie />}/>
                </Routes>
            </App>
        </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
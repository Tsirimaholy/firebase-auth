import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from "./component/Home";
import Login from './component/Form/Login';

function App() {
    return (
        <div >
            <Routes>
                <Route caseSensitive path="/" element={<Login/>}/>
                <Route path="login" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;

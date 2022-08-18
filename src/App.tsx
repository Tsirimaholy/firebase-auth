import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from "./component/Home";
import Login from './component/Form/Login';
import {initializeApp} from "firebase/app"
import {config} from "./config/firebaseConfig";
import AuthRoute from "./component/AuthRoute";
import NotFound from "./component/NotFound";
import "./palette/colors.css"

initializeApp(config.firebaseConfig)

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <Home/>
                        </AuthRoute>
                    }
                />
                <Route path="login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js';
import Client from "./Pages/Client";
import Login from "./Pages/Login";
import {AuthProvider, withAuth} from "./Tech/UserContext";
import {PrivateRoute} from "./Tech/PrivateRoute";

import {Redirect} from "react-router-dom"
import {useState} from "react";

function App() {
    const [user, setUser] = useState('/LogIn');
    return (
        <AuthProvider>
            <Switch>
                <Route exact path='/' component={Home}/>
                <PrivateRoute exact path='/Client' component={Client}/>
                <Route exact path='/Login' component={Login}/>
                <Redirect to='/'/>
            </Switch>
        </AuthProvider>
    );
}

export default App;

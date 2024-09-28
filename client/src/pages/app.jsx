
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={SplashScreen} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
);

export default App;

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';


export default function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}
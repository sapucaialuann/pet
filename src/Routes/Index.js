import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import Adoption from '../Pages/Adoption';
import Home from '../Pages/Home';
import Walk from '../Pages/Walk';
import Login from '../Pages/Login';
import InitialSection from '../Sections/InitialSection';
import Header from '../Components/Header';
export default function Routes() {

    return (
        <Router>
            <Header />
            <InitialSection />
            <Switch>
                <Route path='/walk' component={Walk} />
                <Route path='/adoption' component={Adoption} />
            </Switch>
        </Router>
    )
}
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Adoption from '../Pages/Adoption';
import Accomodation from '../Pages/Accomodation';
import Walk from '../Pages/Walk';
import Login from '../Pages/Login';
import InitialSection from '../Sections/InitialSection';
import Header from '../Components/Header';
import Home from '../Pages/Home';
import Report from '../Pages/Report';
export default function Routes() {

    return (
        <Router>
            <Header />
            <InitialSection />
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/walk' component={Walk} />
                <Route exact path='/adoption' component={Adoption} />
                <Route exact path='/accomodation' component={Accomodation} />
                <Route exact path='/' component={Home}/>
                <Route exact path='/reports' component={Report}/>
            </Switch>
        </Router>
    )
}
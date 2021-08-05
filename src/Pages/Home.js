import React from 'react';
import '../Styles/Home.css';
import Adoption from './Adoption';
import Accomodation from './Accomodation';
import Walk from './Walk';
import Report from './Report';
import Header from '../Components/Header';
import InitialSection from '../Sections/InitialSection';
import {
  Switch,
  Route
} from 'react-router-dom';
export default function Home() {
  
  
  return (
    <>
    <Header />
    <InitialSection />
    <Switch>
      <Route path='/walk' component={Walk} />
      <Route path='/adoption' component={Adoption} />
      <Route path='/accomodation' component={Accomodation} />
      <Route path='/report' component={Report} />
    </Switch>
    </>
  );
}


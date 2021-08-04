import React from 'react';
import '../Styles/Home.css';
import GenericCardComponent from "../Components/GenericCardComponent";
import petfriendly from '../Images/petfriendly.png';

//here this function will be responsible for calling the other react components. Each card will have a value that will be passed as a parameter to the main function.
//Below the  card, it will be added a button that will respond to the component handled by the HandleEvents Function.


export default function Accomodation() {
  return (
    <>
      <GenericCardComponent componentName='bilubilu' componentDescription='se liga nesse hotel brabo pro seu cãozinho.' imgSrc={petfriendly} image/>
    </>
  );
}


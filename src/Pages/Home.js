import Header from '../Components/Header';
import InitialSection from '../Sections/InitialSection';
import '../Styles/Home.css';

//here this function will be responsible for calling the other react components. Each card will have a value that will be passed as a parameter to the main function.
//Below the  card, it will be added a button that will respond to the component handled by the HandleEvents Function.
function HandleEvents(value) {
  switch (value) {
    case 1: 
      // return <Walk />
      break;
    case 2: 
      // return <Adoption />
      break;
    case 3: 
      // return <Store />
      break;
    case 4: 
      // return <Reservation />
      break;
    case 5: 
      // return <AdoptAnimal />
      break;
      
  }
}


export default function Home() {
  return (
    <>
      <Header />
      <InitialSection />
    </>
  );
}


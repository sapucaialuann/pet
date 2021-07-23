import Header from '../Components/Header';
import InitialSection from '../Sections/InitialSection';
import '../Styles/Home.css';
import { Button, Card } from 'react-bootstrap';
import dog from '../Images/dog.png';
import health from '../Images/health.png';
import petbed from '../Images/petbed.png';
import petfriendly from '../Images/petfriendly.png';
import pethouse from '../Images/pethouse.png';

export default function Home() {
  return (
    <>
      <Header />
      <InitialSection />
      <div className='middleSection'>
        <Card>
          <Card.Img variant="top" src={dog} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}


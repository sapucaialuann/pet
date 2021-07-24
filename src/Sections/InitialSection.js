import React from 'react';
import '../Styles/InitialSection.css';
import { Button, Card, CardGroup } from 'react-bootstrap';
import dog from '../Images/dog.png';
import health from '../Images/health.png';
import petbed from '../Images/petbed.png';
import petfriendly from '../Images/petfriendly.png';
import pethouse from '../Images/pethouse.png';


export default function InitialSection() {
  return(
    <div className="homeContainer middleSection">
      <CardGroup className="cardGroupMiddle" style={{width: '80rem'}}>
          <Card >
            <Card.Img variant="top" src={dog} />
            <Card.Body>
            <Button variant="primary">
              <Card.Title className="titleClass">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              
              </Button>
            </Card.Body>
          </Card>
          <Card >
            <Card.Img variant="top" src={health} />
            <Card.Body>
            <Button variant="danger">
              <Card.Title className="titleClass">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              </Button>
            </Card.Body>
          </Card>
          <Card >
            <Card.Img variant="top" src={petbed} />
            <Card.Body>
            <Button variant="success">
              <Card.Title className="titleClass">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              </Button>
            </Card.Body>
          </Card>
          <Card >
            <Card.Img variant="top" src={petfriendly} />
            <Card.Body>
            <Button variant="warning">
              <Card.Title className="titleClass">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              </Button>
            </Card.Body>
          </Card>
          <Card >
            <Card.Img variant="top" src={pethouse} />
            <Card.Body>
            <Button variant="info">
              <Card.Title className="titleClass">Adote um animal</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
    </div>
  )
}
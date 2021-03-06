import React from 'react';
import '../Styles/InitialSection.css';
import { Button, Card, CardGroup } from 'react-bootstrap';
import dog from '../Images/dog.png';
import health from '../Images/health.png';
import petbed from '../Images/petbed.png';
import petfriendly from '../Images/petfriendly.png';
import pethouse from '../Images/pethouse.png';
import {Link} from 'react-router-dom';


export default function InitialSection() {
  return(
    <div className="homeContainer middleSection">
      <CardGroup className="cardGroupMiddle" style={{width: '70rem'}}>


        <Card name='passeador'>
          <Link to='walk'>
          <Card.Img variant="top" src={dog} />
          <Card.Body>
            <Button variant="primary">
              <Card.Title className="titleClass">Encontre um passeador</Card.Title>
              <Card.Text>
                Some quick example text to build
              </Card.Text>
            </Button>
          </Card.Body>
              </Link>
          </Card>


          <Card name='Adote'>
          <Link to='Adoption'>
            <Card.Img variant="top" src={pethouse} />
            <Card.Body>
            <Button variant="info">
              <Card.Title className="titleClass">Adote um animal</Card.Title>
              <Card.Text>
                Some quick example text to build
              </Card.Text>
              </Button>
            </Card.Body>
            </Link>
          </Card>


          <Card name='Denúncia'>
          <Link to='reports'>
            <Card.Img variant="top" src={health} />
            <Card.Body>
            <Button variant="danger">
              <Card.Title className="titleClass">Denúncia</Card.Title>
              <Card.Text>
                Some quick example text to build
              </Card.Text>
              </Button>
            </Card.Body>
            </Link>
          </Card>


          <Card name='Loja'>
            <Card.Img variant="top" src={petbed} />
            <Card.Body>
            <Button variant="success">
              <Card.Title className="titleClass">Loja</Card.Title>
              <Card.Text>
                Some quick example text to build
              </Card.Text>
              </Button>
            </Card.Body>
          </Card>


          <Card name='hotel'>
            <Card.Img variant="top" src={petfriendly} />
            <Card.Body>
            <Button variant="warning">
              <Card.Title className="titleClass">Reserve um hotel</Card.Title>
              <Card.Text>
                Some quick example text to build
              </Card.Text>
              </Button>
            </Card.Body>
          </Card>


        </CardGroup>
    </div>
  )
}
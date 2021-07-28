import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Styles/GenericCardComponent.css';;


export default function GenericCardComponent(props) {
    return (
        <Card name='passeador' className='genericCardComponent'>
            <Card.Img variant="top" src={props.animalImg} />
            <Card.Body>
                <Card.Title className="titleClass">{props.animalName}</Card.Title>
                <Card.Text>
                    {props.animalDescription}
                </Card.Text>
                <Button variant="primary">
                    <p>Adote {props.animalName}!</p>
                </Button>
            </Card.Body>
        </Card>
    )
}
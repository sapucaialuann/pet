import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Styles/GenericCardComponent.css';;


export default function GenericCardComponent(props) {
    //the logic should be adapted for each type of action. Therefore, it's important to connect to the application to this.
    return (
        <Card className='genericCardComponent'>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Title className="titleClass">{props.componentName}</Card.Title>
                <Card.Text>
                    {props.componentDescription}
                </Card.Text>
                <Button variant="primary">
                    <p>{props.componentButtonName}</p>
                    {/* it is important to add logic in this part as well so the button can also be different for each page!! */}
                </Button>
            </Card.Body>
        </Card>
    )
}
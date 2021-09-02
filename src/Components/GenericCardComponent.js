import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getDataFromFirebase } from '../Services/firebaseOperations';
import '../Styles/GenericCardComponent.css';;

export default function GenericCardComponent(props) {
    //the logic should be adapted for each type of action. Therefore, it's important to connect to the application to this.
    const [nodeFromProp, setNodeFromProp] = useState([]);
    const getNodeFromProp = async (object) => {
        await getDataFromFirebase(props.collectionName).then(response => {
            setNodeFromProp(response)
        }).catch(error => console.log(error));
    }
    useEffect(() => {
        getNodeFromProp();
    }, []);

        const RenderedImageComponent = () => {
            if (nodeFromProp.img) {
                return <Card.Img variant="top" src={props.imgSrc} />
            }
            else return <p>No image to be displayed.</p>
        }
    <Card.Body>
        <Card.Title className="titleClass">{props.componentName}</Card.Title>
        {RenderedImageComponent()}
        <Card.Text>
            {props.componentDescription}
        </Card.Text>
        <Button variant="primary">
            <p>{props.componentButtonName}</p>
            {/* it is important to add logic in this part as well so the button can also be different for each page!! */}
        </Button>
    </Card.Body>


    const renderData = () => {
        if (nodeFromProp.length === 0) {
            return <p>Não existem informações disponíveis para {props.collectionName}!</p>
        } else {
            return (
                <Card className='genericCardComponent'>
                    
                </Card>
            );
        }
    }
}
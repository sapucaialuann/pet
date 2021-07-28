import React from 'react';
import '../Styles/InitialSection.css';

export default function GenericPage(props) {
    switch (props.value) {
        case 1:
            return <h1>teste {props.name}</h1>
            break;
        case 2:
            return <h1>teste {props.name}</h1>
            break;
        case 3:
            return <h1>teste {props.name}</h1>
            break;
        case 4:
            return <h1>teste {props.name}</h1>
            break;
        case 5:
            return <h1>teste {props.name}</h1>
            break;
    }
}
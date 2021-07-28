import React from "react";
import GenericCardComponent from "../Components/GenericCardComponent";
import petbed from '../Images/petbed.png';
import { useList } from 'react-firebase-hooks/database';

export default function Accomodation() {
    const [snapshot, loading, error] = useCollection(query, options);
    return(
        <>
            <GenericCardComponent 
            accomodationName='Hotel para cães' 
            accomodationDescription='Espaço amplo e bem iluminado' 
            accomodationImg={petbed}
            accomodationAddress='parker street'
            accomodationPhone='123456'
            accomodationPets=''
            />
            <ul>
                <li>

                </li>
            </ul>
        </>
    )
}

// HOTEL{
// 	nome:
// 	endereço:
// 	telefone:
// 	diária:
// 	petqaceita:
// }
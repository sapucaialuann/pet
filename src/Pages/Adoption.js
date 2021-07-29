import React from "react";
import GenericCardComponent from "../Components/GenericCardComponent";
import petbed from '../Images/petbed.png';
import { useList } from 'react-firebase-hooks/database';

export default function Adoption() {
    // const [snapshot, loading, error] = useCollection(query, options);
    return(
        <>
            <GenericCardComponent animalName='bilubilu' animalDescription='um cachorrinho bem legal.' animalImg={petbed} image/>
            <ul>
                <li>

                </li>
            </ul>
        </>
    )
}
import React from "react";
import GenericCardComponent from "../Components/GenericCardComponent";
import petbed from '../Images/petbed.png';
import { useList } from 'react-firebase-hooks/database';

export default function Adoption() {

    return(
        <>
            <GenericCardComponent componentName='bilubilu' componentDescription='um cachorrinho bem legal.' imgSrc={petbed} image/>
            <ul>
                <li>
                    <p>test</p>
                </li>
            </ul>
        </>
    )
}
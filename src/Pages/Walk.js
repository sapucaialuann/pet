import React from "react";
import GenericCardComponent from "../Components/GenericCardComponent";
import dog from '../Images/dog.png';

export default function Walk() {
    return(
        <>
            <GenericCardComponent componentName='Fulano de tal' componentDescription='Um cara que gosta de andar' imgSrc={dog} image/>
            <ul>
                <li>

                </li>
            </ul>
        </>
    )
}
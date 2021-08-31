import dog from '../Images/dog.png';
import GenericCardComponent from "../Components/GenericCardComponent";
import { insertIntoFirebase, getDataFromFirebase } from "../Services/firebaseOperations";
import React from "react";
export default function Walk() {    
    const objectToPush = {
        nome: 'teste do push nesse caramba - o retorno'
    }
    return(
        <>
            <ul>

                <GenericCardComponent 
                    componentButtonName={'Pegar lista de passeios'} 
                    componentName='bilubilu' 
                    componentDescription='um cachorrinho bem legal.' 
                    imgSrc={dog}
                />
                <button onClick={() =>insertIntoFirebase('passeio', objectToPush)}>me clica, vai</button>
            </ul>
        </>
        
        );
};

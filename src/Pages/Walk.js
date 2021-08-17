import React from "react";
import { useList } from 'react-firebase-hooks/database';
import CRUDfirebase from '../Services/CRUDfirebase';
import { FirebaseDatabaseNode } from "@react-firebase/database";


// import dog from '../Images/dog.png';
// import GenericCardComponent from "../Components/GenericCardComponent";

export default function Walk() {
    const DatabaseList = () => {
        const [snapshots, loading, error] = useList(CRUDfirebase.getAll());


        // https://github.com/bezkoder/react-firebase-hooks/blob/master/src/firebase.js CONTINUAR ESTE TUTORIAL PARA IMPLEMENTAR A LÓGICA DO BANCO DO FIREBASE!!!

    
        return(
            <FirebaseDatabaseNode>
                {/* <GenericCardComponent componentName='Fulano de tal' componentDescription='Um cara que gosta de andar' imgSrc={dog} image/> */}

                {error && <strong>Error: {error}</strong>}
                {loading && <span>List: Loading...</span>}
                {!loading && snapshots (
                    <ul>
                        {snapshots.map((v) => (
                            <li key={v.key}>
                                {v.val()}
                            </li>
                        ))}
                    </ul>
                )}
            </FirebaseDatabaseNode>
        );
    };
    return DatabaseList();
}
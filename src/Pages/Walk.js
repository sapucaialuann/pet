import React from "react";
// import GenericCardComponent from "../Components/GenericCardComponent";
// import dog from '../Images/dog.png';
import {useList} from 'react-firebase-hooks/database'

export default function Walk() {

    const DatabaseList = () => {
        const [snapshots, loading, error] = useList(firebase.database().ref('list'));
    
        return(
            <>
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
            </>
        );
    };
    return DatabaseList();
}
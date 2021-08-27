// import dog from '../Images/dog.png';
// import GenericCardComponent from "../Components/GenericCardComponent";

import React, { useState, useEffect } from "react";
import { useList, useObject } from 'react-firebase-hooks/database';
import CRUDfirebase from '../Services/CRUDfirebase';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import Hotel from '../classes/Hotel';
export default function Walk() {    
    return(
        <FirebaseDatabaseNode>
        </FirebaseDatabaseNode>
    );
};

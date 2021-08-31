import { child, get, set } from "firebase/database";
import databaseConnection from "./firebase";

const getDataFromFirebase = async (collectionName) => {
    await get(databaseConnection).then((snapshot) => {
        if (snapshot.exists()) {
            const results = snapshot.val();
            return results;
        } else {
            console.log("No data available");
            return;
        }
    }).catch((error) => {
        console.error(error);
    });
}
const insertIntoFirebase = (collectionName, collectionValues) => {
    debugger;
    const dbReference = child(databaseConnection(collectionName), collectionName);
    if (dbReference)
    // const pushIntoDatabaseTable =
    set(dbReference, collectionValues).then((response) => {
        if (response) alert(response);
    }).catch((error) => {
        console.error(error);
    })
    console.log(dbReference)
}

export { getDataFromFirebase, insertIntoFirebase };
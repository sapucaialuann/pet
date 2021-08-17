import firebase from "./FirebaseConfig";


const db = firebase.ref("/passeio");

const getAll = () => {
    return db;
};

const create = (data) => {
    return db.push(data);
};

const update = (key, data) => {
    return db.child(key).update(data);
};

const remove = (key) => {
    return db.child(key).remove();
};

const removeAll = () => {
    return db.remove();
};

export default {
    getAll,
    create,
    update,
    remove,
    removeAll,
};
import firebase from "./FirebaseConfig";


const db = firebase.ref("/hotel");
// const db = firebase.ref("/cliente");
// const db = firebase.ref("/denuncia");
// const db = firebase.ref("/funcionario");
// const db = firebase.ref("/avaliacao");
// const db = firebase.ref("/passeio");
// const db = firebase.ref("/pet");
// const db = firebase.ref("/produto");
// const db = firebase.ref("/reserva");
// const db = firebase.ref("/venda");



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
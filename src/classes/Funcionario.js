import Pessoa from './Pessoa';

export default class Funcionario extends Pessoa {
    constructor(nome, CPF, cargo) {
        super(nome, CPF);
        this.cargo = cargo;
    }
}
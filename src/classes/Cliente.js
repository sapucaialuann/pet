import Pessoa from './Pessoa';
export default class Cliente extends Pessoa {
    constructor(nome, CPF, email, endereco, nascimento, telefone) {
        super(nome, CPF);
        this.email = email;
        this.endereco = endereco;
        this.nascimento = nascimento;
        this.telefone = telefone;
    }
}


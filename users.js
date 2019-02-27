class User {
    constructor(id, senha, nome, sobrenome, idade, cargo, acesso) {
        this.id = id;
        this.senha = senha;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cargo = cargo;
        this.acesso = acesso;
        this.is = false;
        this.check = function(id,nome,sobrenome,idade){
            if(id == this.id  || ((nome == this.nome && sobrenome == this.nome && idade== this.nome))){
                return(true);
            }
            if(id == "" ||(( nome == "" && sobrenome == "" && idade == ""))){
                return(true);
            }
            else{return(false);};
            r
        }
    }
}
let clientes = require("../data/clientes.data");

let cliente = require("../data/clientes.data");

const listar = (req, res) => {
    res.json(clientes);
};

const cadastrar = (req, res) => {
    const data = req.body;
    clientes.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};


const buscar = (req, res) => {
    const cpf = req.params.cpf;
    let cliente = "";

    clientes.forEach((c) => {
        if (c.cpf === cpf) cliente = c;
    });

    if  (cliente === "") cliente = "Não encontrado";

    res.send (cliente).end();
};


module.exports = { 
    listar, 
    buscar, 
    cadastrar 
};

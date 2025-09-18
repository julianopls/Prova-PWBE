let produtos = require("../data/produtos.data");
let produto = require("../data/produtos.data");


const listar = (req, res) => {
    res.json(produtos);
};

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const buscar = (req, res) => {
    const id = req.params.id;
    let produto = "";

    produtos.forEach((p, index) => {
        if (p.id === id) {
            produto = p;
        }
    });

    if (produto === "") produto = "Não encontrado";

    res.send(produto).end();
};


const apagar = (req, res) => {
    const id = req.params.id;
    let produto = -1;

    produtos.forEach((p, index) => {
        if (p.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};
const alterar = (req, res) => {
    const id = req.params.id;
    const produto = req.body;

    let indice = -1;
    produtos.forEach((p, index) => {
        if (p.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        Object.keys (produtos).forEach((chave) => {
            produtos[indice][chave] = produto[chave];
        });
        res.status(200).end();
    }
};

module.exports = { 
    listar, 
    buscar, 
    cadastrar,
    apagar,
    alterar
};

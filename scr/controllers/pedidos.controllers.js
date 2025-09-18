let pedidos = require("../data/pedidos.data");
let pedido = require("../data/pedidos.data");



const listar = (req, res) => {
    res.json(pedidos);
};

const buscar = (req, res) => {
    const codigo = req.params.codigo;
    let pedido = "";

    pedidos.forEach((p) => {
        if (p.codigo === codigo) pedido = p;
    });

    if  (pedido === "") pedido = "Não encontrado";

    res.send (pedido).end();
};

const cadastrar = (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const alterar = (req, res) => {
    const id = req.params.id;
    const pedido = req.body;

    let indice = -1;
    pedidos.forEach((p, index) => {
        if (p.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        Object.keys(pedido).forEach((chave) => {
            pedidos[indice][chave] = pedido[chave];
        });
        res.status(200).end();
    }
};


module.exports = { 
    listar, 
    buscar,
    cadastrar,
    alterar
 };

const express = require("express");
const router = express.Router();

const  clientes = require("../controllers/clientes.controllers");


router.get("/cliente", clientes.listar);     
router.get("/clientes/:cpf", clientes.buscar);
router.post("/cliente", clientes.cadastrar);


module.exports = router;
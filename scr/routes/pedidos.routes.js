const express = require("express");
const router = express.Router();

const pedidos = require("../controllers/pedidos.controllers");

router.get("/pedido", pedidos.listar);
router.get("/pedidos/:codigo", pedidos.buscar);
router.post("/pedido", pedidos.cadastrar);
router.patch("/pedidos/:id", pedidos.alterar);

module.exports = router;
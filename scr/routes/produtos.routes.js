const express = require("express");
const router = express.Router();

const  produtos = require("../controllers/produtos.controllers");


router.get("/produto", produtos.listar);     
router.get("/produtos/:id", produtos.buscar);
router.post("/produto", produtos.cadastrar);
router.delete("/produtos/:id", produtos.apagar);
router.patch("/produtos/:id", produtos.alterar);


module.exports = router;
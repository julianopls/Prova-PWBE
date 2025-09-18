const express = require("express");
const cors = require("cors");

const clientesRoutes = require("./scr/routes/clientes.routes");
const produtosRoutes = require("./scr/routes/produtos.routes");
const pedidosRoutes = require("./scr/routes/pedidos.routes");


const app = express(); //Carrega congig. inicial do express



app.use(cors()); //Aplica o cors
app.use(express.json()); //Habilita a comunicação com JSON

app.use(clientesRoutes);
app.use(produtosRoutes);
app.use(pedidosRoutes);



//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});
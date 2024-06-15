// /src/index.js

const app = require("./src/server");
const dbConf = require("./src/config/dbConf");

dbConf().then(() => {
    app.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000");
    });
}).catch((error) => {
    console.error('Error al iniciar el servidor:', error);
});
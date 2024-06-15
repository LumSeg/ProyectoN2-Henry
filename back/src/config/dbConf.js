// /src/dbConf.js

require("dotenv").config();
const mongoose = require("mongoose");

const dbConf = async () => {
    try {
        await mongoose.connect("mongodb+srv://lmssegovia86:vvYiHMvG9Tu9cTmh@pm2.xichgry.mongodb.net/AllMovies?retryWrites=true&w=majority&appName=PM2");
        console.log('Conexión a MongoDB Atlas exitosa');
        
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        process.exit(1); // Salir del proceso con un error
    }
    console.log(process.env.MONGO_URI);
};

module.exports = dbConf;


const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de la app
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Leer y parsear el body
        this.app.use(express.json());
        //Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        //Middleware condicional
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, (req, res) => {
            console.log('listening on port', this.port);
        });
    }
}

module.exports = Server;
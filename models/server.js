const express = require('express')
const cors = require('cors')


class Server{
    constructor (){
        this.app = express();        
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Lectura y parseo del body
        this.app.use(express.json());
        
        //Routes
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Directorio Público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    }
}

module.exports= Server;
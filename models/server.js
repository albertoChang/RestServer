const express = require('express')


class Server{
    constructor (){
        this.app = express();        
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                msg:'get API'
            });
        });
        this.app.put('/api', (req, res) => {
            res.json({
                msg:'put API'
            });
        });
        this.app.delete('/api', (req, res) => {
            res.json({
                msg:'delete API'
            });
        });
        this.app.post('/api', (req, res) => {
            res.json({
                msg:'post API'
            });
        });
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    }
}

module.exports= Server;
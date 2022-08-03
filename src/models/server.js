const express = require('express');
const cors = require('cors');
//const {dbConnection} = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.newsPath = '/api/news';

        //Database Connection
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Application routes
        this.routes();

    }

    connectDB(){
        //dbConnection();
    }

    middlewares(){
        //Cors
        this.app.use(cors());

        //Read and parse body
        this.app.use(express.json());

        //Public directory
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.newsPath, require('../routes/news'));
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Server running in port: ',this.port);
            }
        );
    }
}

module.exports = Server;
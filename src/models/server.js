const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const { newsAPI } = require('../script/newsAPI');


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
        dbConnection();
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
                //First call
                newsAPI();
                //Each 1 hour
                var minutes = 1, the_interval = minutes * 60 * 1000;
                setInterval(function() {
                    console.log("30 minutes passed: Getting news from API");
                    newsAPI();
                }, the_interval);
            }
        );
    }
}

module.exports = Server;
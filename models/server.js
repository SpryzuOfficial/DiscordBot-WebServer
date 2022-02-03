const express = require('express');
const cors = require('cors');

class Server
{
    constructor()
    {
        this.app = express();

        this.paths = {bot: '/bot'};
        this.port = 8080;

        this.middlewares();
        this.routes();
    }

    middlewares()
    {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes()
    {
        this.app.use(this.paths.bot, require('../routes/bot'));
    }

    listen()
    {
        this.app.listen(this.port, () =>
        {
            console.log('Server running on port ', this.port);
        });
    }
}

module.exports = Server;
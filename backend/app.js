const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
const corsOptions = {
  origin: 'https://expenses-analyser.vercel.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

//routes
readdirSync('./routes').map((route) => app.use('', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()

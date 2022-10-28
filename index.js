const express = require('express');
const path = require('path');
require('dotenv').config();

//deb config
const { dbConnection } = require('./database/config');
dbConnection();


// App de Express
const app = express();


// Lectura y parseo del body
app.use(express.json());

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



// Mis rutas
app.use('/api/login', require('./routes/auth'));
app.use('/api/banner', require('./routes/auth'));
app.use('/api/disparcher', require('./routes/auth'));
app.use('/api/category', require('./routes/auth'));

app.use('/api/user', require('./routes/auth'));


//ruta para obtener la hora del servidor
app.use('/api/hora', require('./routes/auth'));




server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});
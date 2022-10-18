const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado: ' + client.id);

    client.on('disconnect', () => {
        console.log('Cliente desconectado: ' + client.id);
    });



    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });


});
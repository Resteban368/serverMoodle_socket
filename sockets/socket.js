const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado token: ', client.handshake.headers['x-token']);
    //guardamos el id del usuario en el socket
    client.id = client.handshake.headers['id'];
    //guardamos el token en el socket
    client.token = client.handshake.headers['x-token'];
    //mostar el id del usuario
    // console.log('id :',client.id);

    //ingresa al usuario a una sala en particular
    //sala global
    
    client.join(client.id); //global, client.id, client.handshake.query.sala
    //escuchar el evento de mensaje personal
    client.on('conectar-usuario', (payload) => {
        console.log(payload);
        
    });



    client.on('private-message', (payload) => {
        console.log(payload);
        io.to(payload.conversacionId).emit('private-message', payload);
    });


    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });


});
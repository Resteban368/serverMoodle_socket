
const mysql = require('mysql');

const dbConnection = async() => {

    try {

        const connection2 = await mysql.createConnection({
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            port: process.env.DB_PORT,
            host: '127.0.0.1',
            user: 'root',
            password: 'root',
            database: 'di'
        });


        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}




module.exports = {
    dbConnection
}



const { response } = require("express")

const mysql = require('mysql');
const connection2 = mysql.createConnection({
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    port: process.env.DB_PORT,
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'di'
});

//para obetener todos los banners
const getDisparcher = (req, res) => {
    connection2.query('SELECT * FROM mdl_disparcher', (err, results, fields) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            results
        })
    });
}

//para obtener un banner por id
const getDisparcherrById = (req, res) => {
    const { id } = req.params;
    connection2.query('SELECT * FROM mdl_disparcher WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            ok: true,
            results
        })
    });
}



module.exports = {
    getDisparcher,
    getDisparcherrById
}
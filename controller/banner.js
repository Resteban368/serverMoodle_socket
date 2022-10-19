const { response } = require("express")

const mysql = require('mysql');
const connection2 = mysql.createConnection({
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    port: process.env.DB_PORT,
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'di'
});

//para obetener todos los banners
const getBanner = (req, res) => {
    connection2.query('SELECT * FROM mdl_banner', (err, results, fields) => {
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

//para obtener un banner por id
const getBannerById = (req, res) => {
    const { id } = req.params;
    connection2.query('SELECT * FROM mdl_banner WHERE id = ?', [id], (err, results, fields) => {
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
    getBanner,
    getBannerById
}
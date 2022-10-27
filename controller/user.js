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
const getUsers = (req, res) => {
    connection2.query('SELECT * FROM mdl_user', (err, results, fields) => {
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
const getUserById = (req, res) => {
    const { id } = req.params;
    connection2.query('SELECT * FROM mdl_user WHERE id = ?', [id], (err, results, fields) => {
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


//obtener el rol del usuario
const getRolUser = (req, res) => {
    const { id } = req.params;
    connection2.query('SELECT * FROM mdl_role_assignments WHERE userid = ?', [id], (err, results, fields) => {
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


//actualizar la informacion del usuario
const updateUser = (req, res) => {
    const { id } = req.params;
    const {  email, phone1 } = req.body;
    connection2.query('UPDATE mdl_user SET email = ?, phone1 = ? WHERE id = ?', [email, phone1, id], (err, results, fields) => {
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
    getUsers,
    getUserById,
    getRolUser,
    updateUser
}
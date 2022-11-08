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
    connection2.query('SELECT * FROM mdl_role_assignments INNER JOIN mdl_role ON mdl_role_assignments.roleid = mdl_role.id where mdl_role_assignments.userid = ?', [id], (err, results, fields) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            results
        })
    });
}


//actualizar la informacion del usuario
const updateUser = (req, res) => {
    const { id } = req.params;
    const { email} = req.body;
    const { phone1} = req.body;
    connection2.query(`UPDATE mdl_user SET email = '${email}', phone1 = '${phone1}' WHERE id = ${id};`, (err, results, fields) => {
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
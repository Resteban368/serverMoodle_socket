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
    connection2.query('SELECT * FROM mdl_user mu where mu.id =?', [id], (err, results, fields) => {
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


//obtener el rol del usuario dependiendo del id del curso
const getRolUser = (req, res) => {
    const { id } = req.params;
    const { courseid } = req.params;
    connection2.query('SELECT  c.fullname, mr.shortname, mu.firstname, mu.lastname , mu.username, mr.id as idRol, mcc.name , mcc.id as idCategory FROM mdl_user mu inner join mdl_role_assignments mra on mu.id=mra.userid  join mdl_role mr on mr.id=mra.roleid JOIN mdl_context ctx ON mra.contextid = ctx.id AND ctx.contextlevel = 50 JOIN mdl_course c ON ctx.instanceid = c.id join mdl_grade_categories mgc on c.id = mgc.courseid join mdl_course_categories mcc on c.category = mcc.id   where mu.id =? and c.id=?', [id,courseid], (err, results, fields) => {
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
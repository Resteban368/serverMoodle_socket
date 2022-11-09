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
const getCategory = (req, res) => {
    connection2.query('SELECT * FROM mdl_course_categories', (err, results, fields) => {
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
const getCategoryById = (req, res) => {
    const { id } = req.params;
    connection2.query('SELECT * FROM mdl_course_categories WHERE id = ?', [id], (err, results, fields) => {
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


const getCourseUserById = (req, res) => {
    const { id } = req.params;
    connection2.query('select c.* ,mcc.* FROM mdl_user u JOIN mdl_role_assignments ra ON u.id = ra.userid JOIN mdl_role r ON ra.roleid = r.id JOIN mdl_context ctx ON ra.contextid = ctx.id AND ctx.contextlevel = 50 JOIN mdl_course c ON ctx.instanceid = c.id join mdl_course_categories mcc on c.category = mcc.id  WHERE  u.id =?', [id], (err, results, fields) => {
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
    getCategory,
    getCategoryById,
    getCourseUserById
    
}
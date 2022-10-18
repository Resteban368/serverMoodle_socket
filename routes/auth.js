/*
path: ??
*/

const { Router } = require('express');
const { crearUsuario } = require('../controller/auth');


const router = Router();


router.post('/new', crearUsuario);


module.exports = router;
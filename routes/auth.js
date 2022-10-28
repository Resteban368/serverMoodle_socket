/*
path: ??
*/

const { Router } = require('express');
const { crearUsuario } = require('../controller/auth');
const { getBanner } = require('../controller/banner');
const { getBannerById } = require('../controller/banner');
const {getDisparcher, getDisparcherrById } = require('../controller/dispacher');
const {getCategory, getCategoryById } = require('../controller/category');
const {getUsers, getUserById,getRolUser,updateUser } = require('../controller/user');
const {getHora} = require('../controller/hora');

const router = Router();


router.post('/new', crearUsuario);

router.get('/all', getBanner);
router.get('/id/:id', getBannerById);


router.get('/tarea', getDisparcher);
router.get('/tarea/:id', getDisparcherrById);

router.get('/todas', getCategory);
router.get('/Category/:id', getCategoryById);


router.get('/usuarios', getUsers);
router.get('/User/:id', getUserById);
router.get('/Rol/:id', getRolUser);
//ruta para actualizar la informacion del usuario
router.put('/User/:id', updateUser);

//ruta para obtener la hora del servidor
router.get('/hora', getHora);
module.exports = router;
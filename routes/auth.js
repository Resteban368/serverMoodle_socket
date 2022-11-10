/*
path: ??
*/

const { Router } = require('express');
const { getBanner } = require('../controller/banner');
const { getBannerById } = require('../controller/banner');
const {getDisparcher, getDisparcherrById } = require('../controller/dispacher');
const {getCategory, getCategoryById, getCourseUserById } = require('../controller/category');
const {getUsers, getUserById,getRolUser,updateUser } = require('../controller/user');
const {getHora} = require('../controller/hora');

const router = Router();



//para obtener todos los banners
router.get('/all', getBanner);
router.get('/id/:id', getBannerById);

//ruta para obtener los disparcher de la tarea
router.get('/tarea', getDisparcher);
router.get('/tarea/:id', getDisparcherrById);

// ruta para obtener las categorias y los cursos
router.get('/todas', getCategory);
router.get('/category/:id', getCategoryById);
router.get('/course/:id', getCourseUserById);


//ruta  informacion del usuario
router.get('/usuarios', getUsers);
router.get('/User/:id', getUserById);
//ruta para obtener el rol del usuario dependiendo del id del usuario y del curso pasado por parametro
router.get('/rol/:id/:courseid', getRolUser);

router.put('/User/:id', updateUser);

//ruta para obtener la hora del servidor
router.get('/hora', getHora);


module.exports = router;
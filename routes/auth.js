/*
path: ??
*/

const { Router } = require('express');
const { crearUsuario } = require('../controller/auth');
const { getBanner } = require('../controller/banner');
const { getBannerById } = require('../controller/banner');
const {getDisparcher, getDisparcherrById } = require('../controller/dispacher');
const {getCategory, getCategoryById } = require('../controller/category');

const router = Router();


router.post('/new', crearUsuario);

router.get('/all', getBanner);
router.get('/id/:id', getBannerById);


router.get('/tarea', getDisparcher);
router.get('/tarea/:id', getDisparcherrById);

router.get('/Category', getCategory);
router.get('/Category/:id', getCategoryById);


module.exports = router;
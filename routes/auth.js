/*
path: ??
*/

const { Router } = require('express');
const { crearUsuario } = require('../controller/auth');
const { getBanner } = require('../controller/banner');
const { getBannerById } = require('../controller/banner');
const {getDisparcher, getDisparcherrById } = require('../controller/dispacher');

const router = Router();


router.post('/new', crearUsuario);

router.get('/all', getBanner);
router.get('/id/:id', getBannerById);


router.get('/tarea', getDisparcher);
router.get('/tarea/:id', getDisparcherrById);




module.exports = router;
/*
path: ??
*/

const { Router } = require('express');
const { crearUsuario } = require('../controller/auth');
const { getBanner } = require('../controller/banner');
const { getBannerById } = require('../controller/banner');


const router = Router();


router.post('/new', crearUsuario);
router.get('/all', getBanner);
router.get('/id/:id', getBannerById);


module.exports = router;
const { Router } = require('express');
const { getGraphics, crearGraphics } = require('../controller/graphics')


const router = Router();

router.get('/', getGraphics);

router.post('/', crearGraphics);

module.exports = router;
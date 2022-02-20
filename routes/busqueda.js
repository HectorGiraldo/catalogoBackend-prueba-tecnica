const { Router } = require('express');
const { getTodo, getById } = require('../controller/busqueda');


const router = Router();

router.get('/:busqueda',  getTodo );
router.get('/id/:id',   getById );



module.exports = router;
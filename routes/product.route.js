const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const { getProducts, getProduct, deleteProduct, updateProduct, postProduct, getByPalabraClave, getByEstado, getByFranquicia }= require('../controllers/villano.controlador.js');


router.get('/', getProducts );

router.get('/:id', getProduct);

router.post('/', postProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/villano/:poder', getByPalabraClave);

router.get('/villano/estado/:estado', getByEstado);

router.get('/villano/franquicia/:franquicia', getByFranquicia);




module.exports = router;

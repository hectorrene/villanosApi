const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const { getProducts, getProduct, deleteProduct, updateProduct, postProduct, getByPalabraClave, getByEstado }= require('../controllers/villano.controlador.js');


router.get('/', getProducts );

router.get('/:id', getProduct);

router.post('/', postProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/villano/:poder', getByPalabraClave);

router.get('/villano/estado/:estado', getByEstado);




module.exports = router;

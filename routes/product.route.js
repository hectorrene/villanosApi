const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const { getProducts, getProduct, deleteProduct, updateProduct, postProduct }= require('../controllers/villano.controlador.js');


router.get('/', getProducts );

router.get('/:id', getProduct);

router.post('/', postProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);




module.exports = router;

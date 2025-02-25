const { json } = require('express');
const Product = require('../models/product.model.js');

const getProducts = async (req, resp) => {
    try {
        const products = await Product.find();
        resp.status(200).json({products});
    } catch (error) {
        resp.status(500).json({message: error.message});
    }
};

const getProduct = async (req, resp) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        resp.status(200).json({product});
    }catch(error){
        resp.status(500).json({message: error.message});
    }
};

const postProduct = async (req, resp) => {
    try {
        const product = await Product.create(req.body); 
        resp.status(200).json({product});
    } catch (error) {
        resp.status(500).json({message: error.message});
    }
};

const updateProduct = async (req, resp) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        if(!product){
            return resp.status(404).json({message: "Villano no encontrado en nuestra super base de datos secreta, Batman alejaros"});
        }

        const updatedProduct = await Product.findById(id);
        resp.status(200).json(updatedProduct);
    } catch(error){
        resp.status(500).json({message: "Error"});
    }
};

const deleteProduct = async (req, resp) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return resp.status(404).json({message: "Not found ggs"});
        }
        resp.status(200).json({message: "Villano eliminado"});
    } catch (error) {
        resp.status(500).json({message: error.message});
    }
    
};


//por
const getByPalabraClave = async (req, resp) => {
    try{
        const { poder } = req.params;

        const regex = new RegExp(`(^|, )${poder}(,|$)`, "i");
        
        const product = await Product.find({
            palabra_clave: { $regex: regex },
        });
        
        resp.status(200).json(product);
    }catch (error){
        resp.status(500).json({ message: error.message })
    }
}

const getByEstado = async (req, resp) => {
    try{
        const { estado } = req.params;
        
        const product = await Product.find({
            estado: estado ,
        });

        resp.status(200).json(product);
    } catch(error){
        resp.status(500).json({message: error.message});
    }
}

const getByFranquicia = async (req, resp) => {
    try{
        const { franquicia } = req.params;
        
        const product = await Product.find({
            franquicia: franquicia,
        });

        resp.status(200).json(product);
    } catch(error){
        resp.status(500).json({message: error.message});
    }
}


module.exports = {
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    postProduct,
    getByPalabraClave,
    getByEstado,
    getByFranquicia
}
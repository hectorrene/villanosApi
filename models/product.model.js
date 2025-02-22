const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        nombre: {type: String, required: true},
        alias: String,
        edad: {type:Number, required: true},
        poderes: {type:String, required: true},
        palabra_clave: String,
        franquicia: {type:String, required: true},
        primera_aparicion: {type:Date, required: true},
        fecha_nacimiento: Date,
        estado: {type:String, required: true},
        imagen: String,
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
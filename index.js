const express = require ('express')
const mongoose = require ('mongoose')
const app = express()
const Product = require('./models/product.model.js')
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, resp) => {
   resp.send('Hello from Express!');
});

//Te da la lista de todos los superheroes con todos sus atributos
app.get('/api/products', async (req, resp) => {
    try {
        const products = await Product.find();
        resp.status(200).json({products});
    } catch (error) {
        resp.status(500).json({message: error.message});
    }
});

//Aquí los agrega a la base de datos
app.post('/api/products', async (req, resp) => {
    try {
        const product = await Product.create(req.body); 
        resp.status(200).json({product});
    } catch (error) {
        resp.status(500).json({message: error.message});
    }
});

//Get From ID
app.get('/api/product/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        resp.status(200).json({product});
    }catch(error){
        resp.status(500).json({message: error.message});
    }
});

//aquí se conecta a la base de datos
mongoose.connect('mongodb+srv://admin:admin@villanosapi.fqj9u.mongodb.net/villanosApi?retryWrites=true&w=majority&appName=villanosApi')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log('Error connecting to MongoDB', error);
});
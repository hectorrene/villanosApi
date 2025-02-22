const express = require ('express')
const mongoose = require ('mongoose')
const app = express()
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);



app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, resp) => {
   resp.send('Hello from Express!');
});



//Te da la lista de todos los superheroes con todos sus atributos


// //Aquí los agrega a la base de datos
// app.post('/api/products', async (req, resp) => {
//     try {
//         const product = await Product.create(req.body); 
//         resp.status(200).json({product});
//     } catch (error) {
//         resp.status(500).json({message: error.message});
//     }
// });

// //Get From ID
// app.get('/api/products/:id', async (req, resp) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         resp.status(200).json({product});
//     }catch(error){
//         resp.status(500).json({message: error.message});
//     }
// });

// //Update papi
// app.get('/api/products/:id', async (req, resp) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
    
//         if(!product){
//             return resp.status(404).json({message: "Villano no encontrado en nuestra super base de datos secreta, Batman alejaros"});
//         }

//         const updatedProduct = await Product.findById(id);
//         resp.send(500).json(updatedProduct);
//     } catch(error){
//         resp.send(500).json({message: "Error"});
//     }
// });

// //delete method
// app.delete('/api/products/:id', async (req, resp) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product){
//             return resp.status(404).json({message: "Not found ggs"});
//         }
//         resp.status(200).json({message: "Villano eliminado"});
//     } catch (error) {
//         resp.status(500).json({message: error.message});
//     }
    
// });

//aquí se conecta a la base de datos
mongoose.connect('mongodb+srv://admin:admin@villanosapi.fqj9u.mongodb.net/villanosApi?retryWrites=true&w=majority&appName=villanosApi')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log('Error connecting to MongoDB', error);
});
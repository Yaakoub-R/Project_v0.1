const express = require('express')
const { getProducts, getOneProduct, deleteProduct, updateProduct, karya, addProduct } = require('../Controllers/Product')
const { upload } = require('../Middlewares/multer')





const productRouter = express.Router()



// productRouter.post('/addProduct',addProduct)
productRouter.post('/addProduct',upload.single('imageA'),addProduct)

productRouter.get('/getProducts',getProducts)

productRouter.get('/getOneProduct/:id',getOneProduct)

productRouter.delete('/deleteProduct/:id',deleteProduct)

productRouter.put('/updateProduct/:id',updateProduct)




module.exports = productRouter
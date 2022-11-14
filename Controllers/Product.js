const { body } = require("express-validator")
const Product = require("../Models/Product")


exports.addProduct=async(req,res)=>{
    try {
        console.log(req.file)
        console.log(req.body)
    //     console.log(req.body)
    //     const newProduct =  new Product(req.body)

    //     const found = await Product.findOne({name : req.body.name})

    //     if(found){
    //         return res.status(400).send({Msg: "Product already exist"})
    //     }

    //    await newProduct.save()

    //     res.status(200).send({Msg :"Product added", newProduct})

    if(req.file){
        const newProduct= new Product({...req.body,imageA : req.file.path.replaceAll('\\','/').slice(13)})
        await newProduct.save()
        res.status(200).send({Msg: 'Articles ajouter', newProduct})
    }else{
        const newProduct= new Product({...req.body})
        await newProduct.save()
        res.status(200).send({Msg: 'Articles ajouter', newProduct})
    }
    } catch (error) {
        res.status(500).send({Msg: "Could not add Product"})
    }
}

exports.getProducts=async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).send({Msg:"List of products",products})
    } catch (error) {
        res.status(500).send({Msg :"Could not get products"})
    }
}

exports.deleteProduct=async(req,res)=>{
    const {id} = req.params
    try {
        
        const delProduct = await  Product.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Product deleted', delProduct})
    } catch (error) {
        res.status(500).send({Msg : 'Could not delete Product'})
    }
}

exports.updateProduct=async(req,res)=>{
    const {id} = req.params
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Product updated', updatedProduct})
    } catch (error) {
        res.status(500).send({Msg : 'Could not update product'})
    }
    
}

exports.getOneProduct=async(req,res)=>{
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).send({Msg : 'Product',product})
    } catch (error) {
        res.status(500).send({Msg:'Could not get product'})
    }
}
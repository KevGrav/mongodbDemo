const express = require('express')
const router = express.Router()

const productController = require('../controller/productController')

router.post('/create-product', (req, res)=>{
    productController.createProduct(req.body, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: 'Product created.', data: payload})
        }
    }) 
})

router.get('/get-all-products', (req, res)=>{
    productController.getAllProducts((error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: 'Products found.', data: payload})
        }
    })
})

router.get('/get-product/:id', (req, res)=>{
    productController.getProductByID((error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: 'Product found.', data: payload})
        }
    })
})

router.put('/find-and-update-product/:id', (req, res)=> {
    productController.updateProductByID(req.params.id, req.body, (err, payload)=>{
        if(err){
            res.status(500).json({message: "Error", error: err})
        }else{
            res.json({message: 'Product updated.', data: payload})
        }
    })
})

router.delete('/find-and-delete-product/:id', (req, res)=>{
    productController.deleteProductByID(req.params.id, (err, payload)=>{
        if(err){
            res.status(500).json({message: "Error", error: err})
        }else{
            res.json({message: 'Product deleted.', data: payload})
        } 
    })
})


module.exports = router
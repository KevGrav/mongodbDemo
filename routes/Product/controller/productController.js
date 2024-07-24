const Product = require('../model/Product') // pulls in schema for DB use

module.exports = {
    //createProduct
    createProduct: function(body, callback){
        const {
            productName,
            price,
            inStock
        } = body
        const newProduct = new Product({
            productName,
            price,
            inStock
        })
        newProduct.save() //Promise
        .then(payload=>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },

    //getAllProducts
    getAllProducts: function(callback){
        Product.find({})
        .then(payload =>{
            callback(null, payload)
        })
        .catch(error=>{
            callback(error, null)
        })
    },

   //getProductByID
   getProductByID: function(id, body, callback){
        Product.findById(id, body)
        .then(Payload =>{
            callback(null, Payload)
        }) 
        .catch(error=> {
            callback(error, null)
        })
    }, 

    //updateProductByID
    updateProductByID: function(id, body, callback){
        Product.findByIdAndUpdate(id, body, {new: true})
        .then(updatedPayload =>{
            callback(null, updatedPayload)
        }) 
        .catch(error=> {
            callback(error, null)
        })
    },

    //deleteProductByID
   deleteProductByID: function(id, callback){
    Product.findByIdAndDelete(id)
    .then(deletedProduct =>{
        callback(null, deletedProduct)
    })
    .catch(err =>{
        callback(err, null)
    })
   } 
}
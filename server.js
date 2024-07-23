const express = require('express')
const logger = require('morgan')

const mongoose = require('mongoose')
const Product = require('./routes/Product/model/Product')
const userRouter = require('./routes/users/model/userRouter')

mongoose
    .connect("mongodb://localhost:27017/mongodb-demo")
    .then(()=>{
        console.log('Mongo DB Connected')
    }).catch((e)=>{
        console.log(e)
    })

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/api/users', userRouter)

// app.post('/', async (req, res)=>{
//     try{
//         const{productName, price, inStock} = req.body
//         const newProduct = new Product({
//             productName, price, inStock
//         })
//         const savedProduct = await newProduct.save()
//         res.json({payload: savedProduct})
//     } catch (error){
//         console.log(error)
//     }
// })



app.listen(3000, ()=>{
    console.log('Server is connected')
})
const express = require('express')
const router = express.Router()

const {getAllUsers} = require('../controller/userController')

router.get('/get-all-users', async(req, res)=>{
    try {
        const foundUsers =  await getAllUsers()
        res.json({message: "Found all users", payload: foundUsers})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
})

router.post('/create-user', (req, res)=>{
    
})

router.put('/find-and-update/:id', (req, res)=> {
    
})

router.delete('/find-and-delete/:id', (req, res)=>{
    
})

module.exports = router
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {String
    },
    email:{
            type: String
        },
    password:{
            type: String
        },
    username:{
            type: String
        }
    
})
module.exports = mongoose.model('user', userSchema)

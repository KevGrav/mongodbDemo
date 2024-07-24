const User = require('../model/User') // pulls in schema for DB use

async function getAllUsers(){
    try {
        const foundUsers = await User.find({})
        return foundUsers  
    } catch (error) {
        return error
    }
}
module.exports = {
    getAllUsers
}
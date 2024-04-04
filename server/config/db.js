const mongoose = require('mongoose')
mongoose.set('strictQuery',false) //to remove warnings from terminal
const connectDB = async() =>{
    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`connected to mongodb ${conn.connection.host}`)


    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectDB
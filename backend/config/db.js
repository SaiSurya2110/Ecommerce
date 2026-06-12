const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDb
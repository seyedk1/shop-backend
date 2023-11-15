const mongoose = require('mongoose')

const connectedDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.log('err', err)
        process.exit(1)
    }
}

module.exports = connectedDB
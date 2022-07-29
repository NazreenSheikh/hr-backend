const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Database Connected...')
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectDB

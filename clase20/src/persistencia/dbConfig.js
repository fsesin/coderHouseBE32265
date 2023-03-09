import mongoose from 'mongoose'

try {
  await mongoose.connect(
    'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/mongoSession65?retryWrites=true&w=majority'
  )
  console.log('Conectado a la base de datos')
} catch (error) {
  console.log(error)
}

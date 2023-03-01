import mongoose from 'mongoose'

const URI =
  'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/mongoIndex65?retryWrites=true&w=majority'
mongoose.connect(URI, (error) => {
  if (error) console.log(error)
  else console.log('Conectado a la base de datos')
})

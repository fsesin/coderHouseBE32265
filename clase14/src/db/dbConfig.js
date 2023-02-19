import mongoose from 'mongoose'

const URI =
  'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/ecommerceCoder?retryWrites=true&w=majority'

mongoose.connect(URI, (error) => {
  if (error) {
    console.log('Error de conexion a base de datos')
  } else {
    console.log('Conectado a la base de datos con exito')
  }
})

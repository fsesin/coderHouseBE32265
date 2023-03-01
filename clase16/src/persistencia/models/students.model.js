import mongoose from 'mongoose'

const studentsSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  calificacion: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  genero:{
    type: String,
    required: true
  }
})

export const studentsModel = mongoose.model('Students', studentsSchema)

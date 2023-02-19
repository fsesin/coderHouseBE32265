import mongoose from 'mongoose'

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

export const coursesModel = mongoose.model('Courses', coursesSchema)

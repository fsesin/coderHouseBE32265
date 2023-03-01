import { studentsModel } from '../models/students.model.js'

export default class StudentsManager {
  async createStudents(array) {
    try {
      const students = await studentsModel.create(array)
      return students
    } catch (error) {
      console.log(error)
    }
  }

  async aggregationFun() {
    try {
      const students = await studentsModel.aggregate([
        { $match: { calificacion: { $gt: 6 } } },
        {
          $group: {
            _id: '$genero',
            promedio: { $avg: '$calificacion' },
            sumCal: { $sum: '$calificacion' },
          },
        },
        {
          $sort: { promedio: -1 },
        },
      ])
      return students
    } catch (error) {
      console.log(error)
    }
  }
}

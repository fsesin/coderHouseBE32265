import { coursesModel } from '../models/courses.model.js'

export default class CoursesManager {
    
  async getAllCourses() {
    try {
      const coursesDB = await coursesModel.find()
      return coursesDB
    } catch (error) {
      return error
    }
  }

  async createCourse(course) {
    try {
      const newCourse = await coursesModel.create(course)
      return newCourse
    } catch (error) {
      return error
    }
  }
}

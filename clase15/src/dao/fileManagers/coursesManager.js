import fs from 'fs'
import { __dirname } from '../../utils.js'

const path = __dirname + '/Courses.json'

export default class CoursesManager {
  async getAllCourses() {
    if (fs.existsSync(path)) {
      try {
        const coursesFile = await fs.promises.readFile(path, 'utf-8')
        return JSON.parse(coursesFile)
      } catch (error) {
        return error
      }
    } else {
      return []
    }
  }

  async createCourse(course) {
    try {
      const coursesFile = await this.getAllCourses()
      let id
      if (coursesFile.length === 0) {
        id = 1
      } else {
        id = coursesFile[coursesFile.length - 1].id + 1
      }
      const newCourse = { id, ...course }
      coursesFile.push(newCourse)
      await fs.promises.writeFile(path, JSON.stringify(coursesFile))
      return newCourse
    } catch (error) {
      return error
    }
  }
}

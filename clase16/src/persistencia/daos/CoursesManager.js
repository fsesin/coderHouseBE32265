import { coursesModel } from "../models/courses.model.js";

export default class CoursesManager {
async createCourses(array){
    try {
        const courses = await coursesModel.create(array)
        return courses
    } catch (error) {
        console.log(error);
    }
}

async getCourse(id){
    try {
        const course = await coursesModel.find({_id:id})
        return course
    } catch (error) {
        console.log(error);
    }
}

async addStudentToCourse(courseId,studentId){
    try {
        const course = await coursesModel.findById(courseId) // mongoose
        course.students.push(studentId) // js
        course.save() // mongoose
        return course
    } catch (error) {
        console.log(error);
    }
}



}
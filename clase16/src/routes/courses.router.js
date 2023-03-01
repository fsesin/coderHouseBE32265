import { Router } from 'express'
import CoursesManager from '../persistencia/daos/CoursesManager.js'
const router = Router()
const coursesManager = new CoursesManager()
const courses = [
  { nombre: 'BackEnd' },
  { nombre: 'FrontEnd' },
  { nombre: 'SQL' },
  { nombre: 'Javascript' },
  { nombre: 'Desarrollo Web' },
]

router.get('/create',async(req,res)=>{
    await coursesManager.createCourses(courses)
    res.json({message:'Cursos creados con exito'})
})

router.post('/addStudent',async(req,res)=>{
    const {courseId,studentId} = req.body
    const course = await coursesManager.addStudentToCourse(courseId,studentId)
    res.json({message:'Estudiante anadido con exito',course})
})

router.get('/:courseId',async(req,res)=>{
    const {courseId} = req.params
    const course = await coursesManager.getCourse(courseId)
    res.json({course})
})
export default router

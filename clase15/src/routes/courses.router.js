import { Router } from 'express'
//import CoursesManager from '../dao/fileManagers/coursesManager.js'
import CoursesManager from '../dao/mongoManagers/coursesManager.js'


const router = Router()
const coursesManager = new CoursesManager()

router.get('/', async (req, res) => {
  const courses = await coursesManager.getAllCourses()
  if (courses.length === 0) {
    res.json({ message: 'No hay cursos disponibles' })
  } else {
    res.json({ message: 'Cursos disponibles', courses })
  }
})

router.post('/',async(req,res)=>{
    const courseInfo = req.body
    const newCourse = await coursesManager.createCourse(courseInfo)
    res.json({message:'Curso creado con exito',newCourse})
})
export default router

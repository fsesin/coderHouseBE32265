import { Router } from 'express'
import StudentsManager from '../persistencia/daos/StudentsManager.js'
const router = Router()
const studentsManager = new StudentsManager()
const students = [
  {
    nombre: 'Juan',
    apellido: 'Hoyos',
    email: 'jhoyos@mail.com',
    calificacion: 10,
    genero: 'M'
  },
  {
    nombre: 'Luis',
    apellido: 'Gutierrez',
    email: 'lgutierrez@mail.com',
    calificacion: 7,
    genero: 'M'
  },
  {
    nombre: 'Nicolas',
    apellido: 'Lezama',
    email: 'nlezama@mail.com',
    calificacion: 7,
    genero: 'M'
  },
  {
    nombre: 'Carolina',
    apellido: 'Osorio',
    email: 'cosorio@mail.com',
    calificacion: 10,
    genero: 'F'
  },
  {
    nombre: 'Laura',
    apellido: 'Hernandez',
    email: 'lhernandez@mail.com',
    calificacion: 8,
    genero: 'F'
  },
  {
    nombre: 'Julia',
    apellido: 'Villadiego',
    email: 'jvilladiego@mail.com',
    calificacion: 6,
    genero: 'F'
  },
  {
    nombre: 'Teofilo',
    apellido: 'Gutierrez',
    email: 'teo@mail.com',
    calificacion: 8,
    genero: 'M'
  },
  {
    nombre: 'Rodrigo',
    apellido: 'Hoyos',
    email: 'rhoyos@mail.com',
    calificacion: 9,
    genero: 'M'
  },
  {
    nombre: 'Juan',
    apellido: 'Zuluaga',
    email: 'jzuluaga@mail.com',
    calificacion: 10,
    genero: 'M'
  },
  {
    nombre: 'Juan',
    apellido: 'Villadiego',
    email: 'jvilladiego@mail.com',
    calificacion: 4,
    genero: 'M'
  },
]

router.get('/create',async(req,res)=>{
    await studentsManager.createStudents(students)
    res.json({message:'Estudiantes creados con exito'})
})

router.get('/aggregation',async(req,res)=>{
const students = await studentsManager.aggregationFun()
res.json({students})
})
export default router

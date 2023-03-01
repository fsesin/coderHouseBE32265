import express from 'express'
import usersRouter from './routes/users.router.js'
import coursesRouter from './routes/courses.router.js'
import studentsRouter from './routes/students.router.js'

import './persistencia/dbConfig.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/users', usersRouter)
app.use('/courses',coursesRouter)
app.use('/students',studentsRouter)


const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

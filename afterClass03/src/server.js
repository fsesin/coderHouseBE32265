import express from 'express'
import usersRouter from './routes/users.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas

app.use('/users', usersRouter)

app.listen(8080, () => {
  console.log('Servidor escuchando al puerto 8080')
})

import express from 'express'

// importar los archivos de rutas
import usersRouter from './routes/users.router.js'
import petsRouter from './routes/pets.router.js'
const app = express()

import { __dirname } from './utils.js'

//
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})

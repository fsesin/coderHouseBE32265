import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

// configurar handlebars
app.engine('handlebars',handlebars.engine()) // unicamente lo hacemos para handlebars o para crear un motor propio
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

// rutas
app.use('/users',usersRouter)
app.use('/views',viewsRouter)



// const users = [
//     {
//         nombre:'Juan',
//         apellido:'Hoyos',
//         edad:30,
//         correo:'jhoyos@mail.com',
//         telefono: '1234567'
//     },
//     {
//         nombre:'Luis',
//         apellido:'Abello',
//         edad:32,
//         correo:'labello@mail.com',
//         telefono: '1234567'
//     },
//     {
//         nombre:'Carolina',
//         apellido:'Martinez',
//         edad:38,
//         correo:'cmartinez@mail.com',
//         telefono: '1234567'
//     },
//     {
//         nombre:'Melissa',
//         apellido:'Zuluaga',
//         edad:30,
//         correo:'mzuluaga@mail.com',
//         telefono: '1234567'
//     },
// ]
// app.get('/',(req,res)=>{
//     const random = Math.floor(Math.random()*4)
//     const usuario = users[random]
//     res.render('actividad1',{...usuario})
// })
// app.get('/lista',(req,res)=>{
//     res.render('lista',{users})
// })
// app.get('/vista2',(req,res)=>{
//     res.render('vista2')
// })



app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})

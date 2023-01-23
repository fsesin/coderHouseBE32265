import express from 'express'
import UserManager from './managerUsers.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas

const userManager = new UserManager('user.json')

// get

// todos los usuarios
app.get('/users', async (req, res) => {
 
  const users = await userManager.consultarUsuarios(req.query)
  res.json({ message: 'Usuarios encontrados con exito', users })
})

// un unico usuario
app.get('/users/:idUser', async (req, res) => {
  const { idUser } = req.params
  const user = await userManager.consultarUsuarioById(parseInt(idUser))
  if(user){
      res.json({ message: 'Usuario encontrado', user })
  } else {
    res.status(400).send('Usuario no existe')
  }
})

// agregar usuario

app.post('/users',async(req,res)=>{
    const user = req.body
  const usuarioCreado =  await userManager.crearUsuario(user)
    res.json({message:'Usuario creado con existe',id:usuarioCreado.id})
})

// eliminar un unico usuario
app.delete('/users/:idUser',async(req,res)=>{
    const {idUser} = req.params
    await userManager.eliminarUsuario(parseInt(idUser))
    res.send('Usuario eliminado con exito')
})

// eliminar todos los usuarios
app.delete('/users',async(req,res)=>{
    await userManager.eliminarUsuarios()
    res.send('Usuarios eliminados')
})








app.listen(8080, () => {
  console.log('Servidor escuchando al puerto 8080')
})

import { Router } from 'express'
import UserManager from '../managerUsers.js'
import { verificarUsuario, verificarDatos } from '../middlewares/auth.js'
import { upload } from '../middlewares/multer.js'
const router = Router()

const userManager = new UserManager('user.json')

// get

// todos los usuarios
router.get('/', async (req, res) => {
  const users = await userManager.consultarUsuarios(req.query)
  res.json({ message: 'Usuarios encontrados con exito', users })
})

// un unico usuario
router.get('/:idUser', async (req, res) => {
   
  const { idUser } = req.params
  const user = await userManager.consultarUsuarioById(parseInt(idUser))
  if (user) {
    res.json({ message: 'Usuario encontrado', user })
  } else {
    res.status(400).send('Usuario no existe')
  }
})

// agregar usuario

router.post('/',upload.array(),verificarUsuario,verificarDatos, async (req, res) => {
  const user = req.body
  const usuarioCreado = await userManager.crearUsuario(user)
  res.json({ message: 'Usuario creado con existe', id: usuarioCreado.id })
})

// eliminar un unico usuario
router.delete('/:idUser',verificarUsuario, async (req, res) => {
  const { idUser } = req.params
  await userManager.eliminarUsuario(parseInt(idUser))
  res.send('Usuario eliminado con exito')
})

// eliminar todos los usuarios
router.delete('/',verificarUsuario, async (req, res) => {
  await userManager.eliminarUsuarios()
  res.send('Usuarios eliminados')
})

export default router
import { Router } from 'express'
import UsersManager from '../persistencia/daos/UsersManager.js'
const router = Router()
const usersManager = new UsersManager()

// router.post('/session', (req, res) => {
//   const { username, password } = req.body
//   req.session.username = username
//   req.session.password = password
//   res.json({ message: 'Sesion iniciada con exito' })
// })

// router.get('/logout', (req, res) => {
//   req.session.destroy((error) => {
//     if (error) {
//       console.log(error)
//       res.json({ message: error })
//     } else {
//       res.json({ message: 'Sesion eliminada con exito' })
//     }
//   })
// })

router.post('/registro', async (req, res) => {
  const newUser = await usersManager.createUser(req.body)
  if (newUser) {
    res.redirect('/views')
  } else {
    res.redirect('/views/errorRegistro')
  }
})
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await usersManager.loginUser(req.body)
  if (user) {
    req.session.email = email
    req.session.password = password
    res.redirect('/views/perfil')
  } else {
    res.redirect('/views/errorLogin')
  }
})
export default router

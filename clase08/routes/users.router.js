import { Router } from 'express'
import { validarUsuario1 } from '../middlewares/userValidation.js'
import { upload } from '../middlewares/multer.js'
const router = Router()

const users = []


// const validarUsuario2 = (req,res,next)=>{
//     const user = req.body
//     if(user.nombre === 'Matias'){
//         res.send('Tu no estas habilitado')
//     }else {
//         next()
//     }
//     }




router.get('/',upload, (req, res) => {
  res.status(200).json({ users })
})

router.post('/', validarUsuario1,(req, res) => {
  // const user = req.body
  // users.push(user)
  users.push(req.body)
  res.status(200).json({ message: 'User agregado con exito'})
})

export default router

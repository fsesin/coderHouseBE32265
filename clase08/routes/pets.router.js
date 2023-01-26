import { Router } from 'express'
import { upload } from '../middlewares/multer.js'
const router = Router()

const pets = []

router.get('/', (req, res) => {
  res.status(200).json({ pets })
})

router.post('/',upload, (req, res) => {
    const pet = req.body
    pets.push(pet)
    res.status(200).json({message:'Pets agregado con exito',pet})
})

export default router

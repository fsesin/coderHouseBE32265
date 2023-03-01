import { Router } from 'express'
import { usersModel } from '../persistencia/models/users.model.js'
import fs from 'fs'
import { __dirname } from '../utils.js'

const router = Router()

const usersData = JSON.parse(
  fs.readFileSync(__dirname + '/data/Users.json', 'utf-8')
)

router.get('/create', async (req, res) => {
  try {
    await usersModel.create(usersData)
    res.json({ message: 'Usuarios guardados con exito' })
  } catch (error) {
    console.log(error)
  }
})

router.get('/info',async(req,res)=>{
    try {
        
       const response = await usersModel.find({first_name:'Frederico'}).explain("executionStats") 
       //const response = await usersModel.find({email:'wdunridgei@pen.io'}).explain("executionStats") 
       //const response = await usersModel.findById("63f76dc6318c66ed51320fc7").explain("executionStats")       
        res.json({response})

    } catch (error) {
        console.log(error);
    }
})

router.get('/pagination',async(req,res)=>{
  const {page=1, limit=10, name} = req.query
  const users = await usersModel.paginate({first_name
:name  },{limit,page})
  const next = users.hasNextPage ? `http://localhost:8080/users/pagination?page=${users.nextPage}` : null
  const prev = users.hasPrevPage ? `http://localhost:8080/users/pagination?page=${users.prevPage}` : null
  res.json({results:users.docs, info:{count:users.totalDocs, pages:users.totalPages,next,prev}})
})

export default router

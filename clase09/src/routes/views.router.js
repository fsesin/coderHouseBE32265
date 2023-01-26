import { application, Router } from "express";
import fs from 'fs'
const router = Router()
const path = 'users.json'

router.get('/',(req,res)=>{
    res.render('formulario')
})

router.get('/users',async(req,res)=>{
    let usersJSON = await fs.promises.readFile(path,'utf-8')
    let users = JSON.parse(usersJSON)
    res.render('lista',{users})
})

export default router
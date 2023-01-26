import { Router } from "express";
import fs from 'fs'
const router = Router()
const path = 'users.json'
router.post('/',async(req,res)=>{
    let users = []
    const user = req.body
    if(fs.existsSync(path)){
        let usersJSON = await fs.promises.readFile(path,'utf-8')
        users = JSON.parse(usersJSON)
    }
    users.push(user)
    await fs.promises.writeFile(path,JSON.stringify(users))
  res.redirect('/views/users')
})

export default router
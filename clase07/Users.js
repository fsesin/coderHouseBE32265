import e from 'express'
import fs from 'fs'

export default class Users {
  constructor(path) {
    this.path = path
  }

  async findUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const usersFile = await fs.promises.readFile(this.path, 'utf-8')
        const userJS = JSON.parse(usersFile)
        return userJS
      } else {
        return []
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async findUserById(idUser) {
    try {
        const usersFile = await this.findUsers()
        const user = usersFile.find(u=>u.id === idUser)
        if(user){
            return user
        } else {
            throw new Error('Usuario no existe')
        }
    } catch (error) {
            console.log(error)
    }

  }

  async createUser(obj) {
    const usersFile = await this.findUsers()
    let id = usersFile.length === 0 ? 1 : usersFile[usersFile.length-1].id + 1
    const user = {id,...obj}
    usersFile.push(user)
    await fs.promises.writeFile(this.path,JSON.stringify(usersFile))
    return user
  }

  updateUser() {}

  deleteUsers() {}

  deleteUserById() {}
}

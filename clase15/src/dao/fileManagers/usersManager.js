import fs from 'fs'
import { __dirname } from '../../utils.js'

const path = __dirname + '/Users.json'

export default class UsersManager {
  async getAllUsers() {
    if (fs.existsSync(path)) {
      try {
        const usersFile = await fs.promises.readFile(path, 'utf-8')
        return JSON.parse(usersFile)
      } catch (error) {
        return error
      }
    } else {
      return []
    }
  }

  async createUser(user) {
    try {
      const usersFile = await this.getAllUsers()
      let id
      if (usersFile.length === 0) {
        id = 1
      } else {
        id = usersFile[usersFile.length - 1].id + 1
      }
      const newUser = { id, ...user }
      usersFile.push(newUser)
      await fs.promises.writeFile(path, JSON.stringify(usersFile))
      return newUser
    } catch (error) {
      return error
    }
  }
}
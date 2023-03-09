import { userModel } from '../models/users.model.js'

export default class UsersManager {
  async createUser(user) {
    const { email, password } = user
    try {
      const existeUsuario = await userModel.find({email})
      console.log('existe',existeUsuario);
      if (existeUsuario.length === 0) {
        const newUser = await userModel.create(user)
        return newUser
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async loginUser(user){
    const {email,password} = user
    const usuario = await userModel.find({email,password})
    if(usuario.length !== 0 ){
      return usuario
    } else {
      return null
    }
  }
}

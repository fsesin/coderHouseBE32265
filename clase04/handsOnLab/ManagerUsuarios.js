const fs = require('fs')
const path = './Usuarios.json'

class ManagerUsuarios {
constructor(){
    this.usuarios = []
}

  async crearUsuario(usuario) {
    try {
        const usuariosFile = await this.consultarUsuarios()
        usuariosFile.push(usuario)
        await fs.promises.writeFile(path,JSON.stringify(usuariosFile))
    } catch (error) {
        console.log(error)
    }
  }

  async consultarUsuarios() {
    try {
      if (fs.existsSync(path)) {
        const usuarios = await fs.promises.readFile(path, 'utf-8')
        const usuariosJS = JSON.parse(usuarios)
        return usuariosJS
      } else {
        return []
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const manager = new ManagerUsuarios()
const usuario1 = {
    nombre:'Esteban',
    apellido:'Suarez',
    edad:35,
    curso:'JS'
}
const usuario2 = {
    nombre:'Luis',
    apellido:'Arrazola',
    edad:28,
    curso:'BackEnd'
}
async function prueba() {
  const consultaUsuarios = await manager.consultarUsuarios()
  console.log(consultaUsuarios)
  //await manager.crearUsuario(usuario2)  
  manager.updateUsuarios(1,{nombre:'Ernesto'})
}

prueba()


//
// 'primer texto' 'segundo texto' 'tercer texto'
// '[
//     {

//     }
// ]' '{}' '{}'
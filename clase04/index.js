// console.log('Primer console')

// setTimeout(() => {
//     console.log('Console set timeout')
// }, 0);

// console.log('Ultimo console');

const fs = require('fs')

// SYNC

// const path = './files/file1.txt'
// if (fs.existsSync(path)) {
//   //LEER
//   const info = fs.readFileSync(path, 'utf-8')
//   console.log(info)
//   // ADICIONAR INFO
//   fs.appendFileSync(path, ' segundo texto')
//   const infoMod = fs.readFileSync(path, 'utf-8')
//   console.log(infoMod)
//   // ELIMINAR
//   fs.unlinkSync(path)
// } else {
//   //CREAR
//   fs.writeFileSync(path, 'Primer texto')
// }

// CB

// const pathCB = './files/fileCB.txt'

// if (fs.existsSync(pathCB)) {
//   fs.readFile(pathCB, 'utf-8', (error, info) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(info)
//       fs.appendFile(pathCB, ' Segundo texto CB', (error) => {
//         if (error) {
//           console.log(error)
//         } else {
//           console.log('Info adicionada con exito')
//           fs.readFile(pathCB, 'utf-8', (error, info) => {
//             if (error) {
//               console.log(error)
//             } else {
//               console.log(info)
//               fs.unlink(pathCB, (error) => {
//                 if (error) {
//                   console.log(error)
//                 } else {
//                   console.log('Archivo eliminado con exito')
//                 }
//               })
//             }
//           })
//         }
//       })
//     }
//   })
// } else {
//   fs.writeFile(pathCB, 'Primer texto CB', (error) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log('Archivo creado con exito')
//     }
//   })
// }

// PROMESAS .THEN .CATCH

// const pathProm = './files/filePR.txt'

// if (fs.existsSync(pathProm)) {
//   fs.promises
//     .readFile(pathProm, 'utf-8')
//     .then((info) => {
//       console.log(info)
//       return fs.promises.appendFile(pathProm, 'Segundo texto Promesas')
//     })
//     .then(() => {
//       console.log('Info adicionada con exito')
//       return fs.promises.readFile(pathProm, 'utf-8')
//     })
//     .then((info) => {
//       console.log(info)
//       return fs.promises.unlink(pathProm)
//     })
//     .then(() => console.log('Archivo eliminado con exito'))
//     .catch((error) => console.log(error))
// } else {
//   fs.promises
//     .writeFile(pathProm, 'Primer texto promesas')
//     .then(() => console.log('Archivo creado con exito'))
//     .catch((error) => console.log(error))
// }

// const producto = {
//   nombre: 'Iphone',
//   precio: 500,
//   stock: 25,
// }

const productos = [
  {
    nombre: 'Iphone',
    precio: 500,
    stock: 25,
  },
  {
    nombre: 'Ipad',
    precio: 200,
    stock: 15,
  },
]

const pathJSON = './files/fileJSON.json'

//fs.writeFileSync(pathJSON,JSON.stringify(productos))
const info = fs.readFileSync(pathJSON,'utf-8')
const infoJS = JSON.parse(info)
console.log(infoJS)

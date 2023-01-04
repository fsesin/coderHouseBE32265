//ES7

const expAnterior = Math.pow(2,3)
const exp = 2 ** 3
//console.log(expAnterior,exp)

const array = [1,2,3,4,5,8,9,0]

//console.log(array.includes(2))
//console.log(array.includes(7))

// ES8

// const obj = {
//     nombre:'Esteban',
//     apellido:'Abello',
//     edad: 38,
//     esCasado:true
// }

//console.log(Object.values(obj));
//console.log(Object.entries(obj));
//console.log(Object.keys(obj));

//const arrayObj = Object.entries(obj)
//const arrayObjMod = arrayObj.map(([key,value])=>[key,`${value} modificado`])
// const arrayObjMod = arrayObj.map(([key,value])=>value)
//console.log(arrayObjMod)
//const objMod = Object.fromEntries(arrayObjMod)
//console.log(objMod)

// ES9

// SPREAD

const animales1 = ['perro','gato','leon','raton']
const animales2 = ['serpiente','conejo','vaca','pez']

//animales1.concat(animales2)
const animales = [...animales1,...animales2]
//console.log(animales);
const obj1 = {
    nombre:'Esteban',
    apellido:'Abello',
    
}
const obj2 = {
    nombre:'Luis',
    edad: 38,
    esCasado:true
}
//const obj = {...obj1,...obj2,nombre:'Carlos'}

// {
//     apellido:'Abello', 
//     edad: 38,
//     esCasado:true,
//     nombre:'Carlos'
// }
//console.log(obj)

//const obj1Copia = obj1
const obj1Copia = {...obj1}
obj1Copia.nombre = 'Jose'
//console.log(obj1Copia)
//console.log(obj1)

const arrayNum = [1,4,6,7,3,6,8,3,2]
//console.log(Math.min(...arrayNum))

// Rest

const funcionRest = (a,b,...otros)=>{
console.log(a);
console.log(b);
console.log(...otros);
}
//funcionRest(1,2,3,4,5,6,7,8,9)

const objRest = {
    nombre:'Juan',
    apellido:'Hoyos',
    curso:'JS',
    edad:40
}

const {nombre,apellido,...otraInfo} = objRest
//console.log(otraInfo);

// DESAFIO

const objetos = [
    {
      manzanas: 3,
      peras: 2,
      carne: 1,
      jugos: 5,
      dulces: 2,
    },
    {
      manzanas: 1,
      sandias: 1,
      huevos: 6,
      jugos: 1,
      panes: 4,
    },
  ]

  const arrayFrutas = []  
  let total = 0
  objetos.forEach(objeto=>{
    
    // arreglo frutas no repetidas
     const array = Object.keys(objeto)
     //console.log(array)
    array.forEach(fruta=>{
        !arrayFrutas.includes(fruta) && arrayFrutas.push(fruta)
        // if(!arrayFrutas.includes(fruta)){
        //     arrayFrutas.push(fruta) 
        // }
    })

    // total 
    const valoresArreglo = Object.values(objeto)
    //console.log(valoresArreglo)
    valoresArreglo.forEach(valor=>total+=valor)
  })
  //console.log(total)

  //ES10

  const saludo = '      hola a todos             '
  //console.log(saludo);
  //console.log(saludo.trim());


  const arrayFlat = [1,2,3,4,[1,2,3,4,[1,2,3,4,5,[1,2,3,4,5]]]]
  //console.log(arrayFlat.flat(Infinity));

  //ES11

  console.log(0 || 10)
  console.log(0 ?? 10 );

//   class Usuario{
//     #apellido
//     constructor(){
//         this.nombre = 'Esteban'
//     }
//   }

//   const nuevoUsuario = new Usuario()
//   nuevoUsuario

// HANDS ON LAB

class TicketManager {
    #precioBaseDeGanancia= 0.20
    constructor(){
        this.eventos = []
    }

    agregarEventos(nombre,lugar,precio,capacidad=50,fecha=new Date()){
        const evento = {
            nombre,
            lugar,
            precio:precio+this.#precioBaseDeGanancia
        }
    }
}

const manager = new TicketManager()
manager.agregarEventos('Evento1','Lugar1',5,)
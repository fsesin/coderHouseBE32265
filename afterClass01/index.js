class TicketManager {
  #precioBaseDeGanancia = 0.15
  constructor(nombre) {
    this.nombre = nombre
    this.eventos = []
  }

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    // if(!nombre || !lugar || !precio){
    //     console.log('Falta algun campo')
    // } else {

    // }
    
    const evento = {
      id: this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    }
    this.eventos.push(evento)
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#evaluarEvento(idEvento)
    if (evento) {
      if (evento.participantes.includes(idUsuario)) {
        console.log('Participante ya esta incluido en este evento')
      } else {
        evento.participantes.push(idUsuario)
        console.log('Participante incluido con exito')
      }
    } else {
      console.log('Evento no existe')
    }
  }

  ponerEventoEnGira(idEvento,nuevoLugar,nuevaFecha){
    const evento = this.#evaluarEvento(idEvento)
    if(evento){
        const nuevoEvento = {
            ...evento,
            id:this.#generarId(),
            lugar:nuevoLugar,
            fecha:nuevaFecha,
            participantes:[]
        }
        this.eventos.push(nuevoEvento)
    } else {
        console.log('Evento no existe')
    }
  }


  #generarId() {
    let id = 1
    if (this.eventos.length !== 0) {
      id = this.eventos[this.eventos.length - 1].id + 1
    }
    return id
  }
  #evaluarEvento(idEvento) {
    return this.eventos.find((evento) => evento.id === idEvento)
  }
}

const ticketManager1 = new TicketManager('EMINEM')
const ticketManager2 = new TicketManager('U2')
ticketManager1.agregarEvento('Evento1', 'Lugar1', 3, 100)
ticketManager1.agregarEvento('Evento2', 'Lugar2', 2.5)
ticketManager1.agregarEvento('Evento3', 'Lugar3', 10, 80)
ticketManager1.agregarUsuario(2,1)
ticketManager1.agregarUsuario(2,1)
ticketManager1.ponerEventoEnGira(1,'NuevoLugar1',new Date('01/10/2023'))
ticketManager1.ponerEventoEnGira(2,'NuevoLugar2',new Date('01/16/2023'))
console.log(ticketManager1.getEventos())
//console.log(ticketManager2.getEventos())

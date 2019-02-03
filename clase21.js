class Persona {
  constructor(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
  }

  saludar (fn) {
    var { nombre, apellido } = this
    //El código anterior es equivalente a decir:
    // var nombre = this.nombre
    // var apellido = this.apellido
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido, false)
    }
  }

  soyAlto () {
    return this.estatura >= 1.7
  }

}

class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura) {
    super(nombre, apellido, estatura)
  }

  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador.`)
    if(fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre,apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`)
  }
}

//En JS no hay clases : HAY PROTOTIPOS!!!
//HERENCIA PROTOTIPAL



var alex = new Desarrollador('Alex', 'Rueda U.', 1.70)
var juli = new Persona('Julika', 'Klepp', 1.65)

// alex.soyAlto()
// juli.soyAlto()

alex.saludar(responderSaludo)
juli.saludar(responderSaludo)

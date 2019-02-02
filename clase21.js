class Persona {
  constructor(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
  }

  saludar () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto () {
    return this.estatura >= 1.7
  }

}

class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura) {
    super(nombre, apellido, estatura)
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
  }
}


//En JS no hay clases : HAY PROTOTIPOS!!!
//HERENCIA PROTOTIPAL



// var alex = new Persona('Alex', 'Rueda U.', 1.70)
// var juli = new Persona('Julika', 'Klepp', 1.65)

// alex.soyAlto()
// juli.soyAlto()

//alex.saludar()

function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

var alex = new Persona('Alex', 'Rueda U.')
var juli = new Persona('Julika', 'Klepp')

//alex.saludar()

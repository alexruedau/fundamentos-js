function Persona(nombre, apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.estatura >= 1.7
}

var alex = new Persona('Alex', 'Rueda U.', 1.70)
var juli = new Persona('Julika', 'Klepp', 1.65)

alex.soyAlto()
juli.soyAlto()

//alex.saludar()

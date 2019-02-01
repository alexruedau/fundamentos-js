var alex = {
  nombre: 'Alex',
  apellido: 'Rueda U.',
  estatura: 1.70,
  cantidadDeLibros: 10
}

var juli = {
  nombre: 'Julika',
  apellido: 'Klepp',
  estatura: 1.65,
  cantidadDeLibros: 199
}

var rocio = {
  nombre: 'Rocío',
  apellido: 'Urrego',
  estatura: 1.55,
  cantidadDeLibros: 20
}

var emiliano = {
  nombre: 'Emiliano',
  apellido: 'Rueda',
  estatura: 1.68,
  cantidadDeLibros: 30
}

var margrit = {
  nombre: 'Margrit',
  apellido: 'Klepp',
  estatura: 1.65,
  cantidadDeLibros: 250
}

var klaus = {
  nombre: 'Klaus',
  apellido: 'Klepp',
  estatura: 1.70,
  cantidadDeLibros: 100
}

// var acum = 0;
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros;
// }
//Una manera de hacer lo mismo del ciclo anterior es:

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);

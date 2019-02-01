var alex = {
  nombre: 'Alex',
  apellido: 'Rueda U.',
  estatura: 1.70
}

var juli = {
  nombre: 'Julika',
  apellido: 'Klepp',
  estatura: 1.65
}

var rocio = {
  nombre: 'Rocío',
  apellido: 'Urrego',
  estatura: 1.55
}

var emiliano = {
  nombre: 'Emiliano',
  apellido: 'Rueda',
  estatura: 1.68
}

var margrit = {
  nombre: 'Margrit',
  apellido: 'Klepp',
  estatura: 1.65
}

var klaus = {
  nombre: 'Klaus',
  apellido: 'Klepp',
  estatura: 1.70
}

const ESTATURA_MINIMA = 1.7
const esAlta = ({ estatura }) => estatura >= ESTATURA_MINIMA;
const esBaja = ({ estatura }) => estatura < ESTATURA_MINIMA;


var personas = [alex, juli, rocio, emiliano, margrit, klaus];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
//la función se puede ejecutar de la siguiente manera pero es mejor hacerlo
//utilizando el código anterior
// var personasAltas = personas.filter(function (persona) {
//   return persona.estatura >= 1.7
// })

console.log(personasAltas);
console.log(personasBajas);

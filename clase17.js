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

var personas = [alex, juli, rocio, emiliano, margrit, klaus];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.estatura} mts`);
}

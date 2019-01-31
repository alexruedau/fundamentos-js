var alex = {
  nombre: 'Alex',
  apellido: 'Rueda U.',
  edad: 29,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log('Ingeniero');
  } else {
    console.log('No es ingeniero');
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  }
  if (persona.cantante) {
    console.log('Cantante');
  }
  if (persona.guitarrista) {
    console.log('Guitarrista');
  }
  if (persona.drone) {
    console.log('Piloto de Drone');
  }
}

imprimirProfesiones(alex);

function imprimirSiEsMayorDeEdad(persona){
  console.log(`${persona.nombre} es:`);
  if (persona.edad < 18) {
    console.log('Menor de edad');
  } else {
    console.log('Mayor de edad');
  }
}

imprimirSiEsMayorDeEdad(alex);

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

//////////////////////////////////////////////////

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

//son equivalentes éstas funciones on algunas diferencias
// const esMenorDeEdad = function  (persona) {
//   return persona.edad < MAYORIA_DE_EDAD;
// }

function imprimirSiEsMayorDeEdad(persona){

  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(alex);

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('Acceso Denegado');
  } else {
    console.log('Acceso Aprobado');
  }
}

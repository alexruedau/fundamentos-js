var alex = {
  nombre: 'Alex',
  apellido: 'Rueda',
  edad: 29
}

var juli = {
  nombre: 'Julika',
  apellido: 'Klepp',
  edad: 33
}


function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre se puede reemplazar por
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(alex);
imprimirNombreEnMayusculas(juli);
imprimirNombreEnMayusculas({ nombre: 'Pepito' });
//Errores
//imprimirNombreEnMayusculas();
//imprimirNombreEnMayusculas({ apellido: 'Pérez' });

//////////////////Ésto es un reto////////////////////
function imprimirNombreYEdad(otraPersona) {
  var { nombre } = otraPersona;
  var { edad } = otraPersona;
  console.log(`${nombre} tiene ${edad} anos`);
}

imprimirNombreYEdad(alex);
imprimirNombreYEdad(juli);
/////////////////////////////////////////////////////


function cumple(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

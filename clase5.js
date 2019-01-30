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


function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(alex);
imprimirNombreEnMayusculas(juli);
imprimirNombreEnMayusculas({ nombre: 'Pepito' });
//Errores
//imprimirNombreEnMayusculas();
//imprimirNombreEnMayusculas({ apellido: 'Pérez' });

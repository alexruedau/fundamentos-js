const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, opts, function (data) {
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

function onError (id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  // var promesas = ids.map(function (id) {
  //   return obtenerPersonaje(id)
  // })
  //A continuación la función de arriba simplificada
  //como arrow function
  var promesas = ids.map(id =>  obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch(id) {
    onError(id)
  }
}

obtenerPersonajes()

// obtenerPersonaje(1)
// .then(personaje1 => {
//   console.log(`El personaje 1 es ${personaje1.name}`);
//   return obtenerPersonaje(2)
// })
// .then(personaje2 => {
//   console.log(`El personaje 2 es ${personaje2.name}`);
//   return obtenerPersonaje(3)
// })
// .then(personaje3 => {
//   console.log(`El personaje 3 es ${personaje3.name}`);
//   return obtenerPersonaje(4)
// })
// .then(personaje4 => {
//   console.log(`El personaje 4 es ${personaje4.name}`);
// })
// .catch(onError)

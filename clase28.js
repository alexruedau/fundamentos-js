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

obtenerPersonaje(1)
.then(function (personaje) {
  console.log(`El personaje 1 es ${personaje.name}`);
})
.catch(onError)

//A ésto se le conoce como "Callback Hell". Lo es.
// obtenerPersonaje(1, function (personaje) {
//   console.log(`Hola, yo soy ${personaje.name}`);

  // obtenerPersonaje(2, function(personaje) {
  //   console.log(`Hola, yo soy ${personaje.name}`);
  //
  //   obtenerPersonaje(3, function(personaje){
  //     console.log(`Hola, yo soy ${personaje.name}`);
  //
  //     obtenerPersonaje(4, function (peronaje) {
  //       console.log(`Hola, yo soy ${peronaje.name}`);
  //     })
  //   })
  // })
// })

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
  .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
    })
  }

//A ésto se le conoce como "Callback Hell". Lo es.
obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);

  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);

    obtenerPersonaje(3, function(personaje){
      console.log(`Hola, yo soy ${personaje.name}`);

      obtenerPersonaje(4, function (peronaje) {
        console.log(`Hola, yo soy ${peronaje.name}`);
      })
    })
  })
})

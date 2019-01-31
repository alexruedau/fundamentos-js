var alex = {
  nombre: 'Alex',
  apellido: 'Rueda U.',
  edad: 29,
  peso: 70
}

console.log(`Al inicio del ano ${alex.nombre} pesa ${alex.peso}kg`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(alex);
  } else if (random < 0.5) {
    //adelgazar
    adelgazar(alex);
  }
}

console.log(`Al final del ano ${alex.nombre} pesa ${alex.peso.toFixed(1)}kg`);

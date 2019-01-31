var alex = {
  nombre: 'Alex',
  apellido: 'Rueda U.',
  edad: 29,
  peso: 70
}

console.log(`Al inicio del ano ${alex.nombre} pesa ${alex.peso}kg`);

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = alex.peso - 3;
var dias = 0;

while (alex.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(alex);
  }
  if (realizaDeporte()) {
    adelgazar(alex);
  }

  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${alex.nombre} adelgazó 3kg`);

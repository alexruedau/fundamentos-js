var signo = prompt('Cuál es tu signo?');

switch (signo) {
  case 'acuario':
    console.log('Seguramente en este día tendrá que hacerle frente a las diferentes situaciones que son completamente nuevas para su vida. No se reprima y siga adelante.');
    break;

  case 'piscis':
    console.log('Sepa que si sigue mostrándose impulsivo e impaciente, no logrará resolver todos los temas en un solo día. Baje los niveles de ansiedad y todo se acomodará.');
    break;

  case 'capricornio':
    console.log('Magnifico día para que renuncie a los hábitos poco favorables que está teniendo últimamente. Reemplácelos por aquellos que lo benefician realmente.');
    break;

  case 'geminis':
  case 'géminis':
    console.log('Guíese por su instinto, sepa que esto le ayudará a detectar de inmediato si alguien intenta perjudicarlo profesionalmente. Cuídese de la gente negativa.');
    break;
  default:
    console.log('No es un signo zodiacal válido')
    break;
}

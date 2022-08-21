function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // var nombre = "frase de prueba"

  // var nueva = nombre.split(" ").map(e => e[0].toUpperCase()+e.slice(1) )

  // var nueva2 = nueva.join(" ")

  // para hacer reverse y tal al palabreo LOS ESPACIOS DE LAS SPLIT Y JOIN IMPORTAN Y MUCHO
  // var revers = nueva2.split("").reverse()

  // var unida = revers.join('')
  var nombre = "JAVIER";
  var nuevonombre = nombre;

  return nueva2;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  return cb(cb);
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  cb(n1, n2);
}
///TODA ESTA SE SOLICIONA CON UN REDUCE PERO AQUI FUNCIONA IGUAL
function sumarArray(listado) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  // ejemplo sin callback
  // var listado = [-5,1,2,3,4,5,6,7,8,9,10,1.5 ]

  var sumados = 0;

  for (i = 0; i < listado.length; i++) {
    if (listado[i] === Math.floor(listado[i])) {
      sumados += listado[i];
    }
  }
  cb(sumados);

  console.log(sumados);
}
function callb(listado, cb) {
  return cb(5, 5);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  var listado = [1, 2, 3, 4, 5];
  var cb = [];
  listado.forEach(function (numeros) {
    cb.push(numeros);

    console.log(cb);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var listado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var cb = [];
  var nuevalista = [];

  for (i = 0; i < listado.length; i++) {
    cb.push(listado[i]);
    nuevalista.push(cb[i]);
  }
  if (cb.length == nuevalista.length) {
    console.log(
      "el valor de la longitud es igual cb:" +
        cb.length +
        " nuevalista:" +
        nuevalista.length
    );
  } else {
    console.log(
      "el valor de la longitud no es cb:" +
        cb.length +
        " nuevalista:" +
        nuevalista.length
    );
  }
}

function filter() {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  var listado = ["america", "Amazon", "destruccion", "camion", "Amazonia"];
  var filtro = [];

  var mayus = listado.map((e) => e.toLowerCase());

  var filtrado = mayus.filter((e) => (e[0] === "a" ? filtro.push(e) : false));

  // if(elemento[0].includes('a') || elemento[0].includes('A')){

  //   filtro.push(elemento)
  // }

  // var listado = ['america','Amazon','destruccion','camion','Amazonia']
  // var filtro = []
  // var uper = listado.map(e => e.toUpperCase())

  // uper.filter(e => e[0] === "A"? filtro.push(e):  console.log("X") )

  // console.log(filtro)

  console.log(filtrado);
}
filter();
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};

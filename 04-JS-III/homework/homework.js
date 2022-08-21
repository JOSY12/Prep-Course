// No cambies los nombres de las funciones.

function devolverPrimerElemento() {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  var listacosas = [1,2,3,4,5];
  return[listacosas[0]];


}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:


  var listacosas = [1,2,3,4,5];
  return[listacosas[listacosas.length -1]];



}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  var array = [1,2,3,4,5,'6','7'];

  return [array.length];





}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:


  for(let i= 0; i < array.length;i++ ){

    resulado = (array[i]+1);

      return resulado;
   
  }


}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

//  var numeros = [1,2,3,4,5]
  
      array.push(elemento);

      return array;
    
    


}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

//var numeros = [1,2,3,4,5]
  array.unshift(elemento);

  return (array);








}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var palabras = ['Hello','world!',]

  var combinacion = palabras[0]+" "+[palabras[1]];

  //var combinacion = palabras.concat()

    return combinacion;

  

//////////////////////////////////////




}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

var frutas = [1,2];
          var elemento = 5;

         var ojo = frutas.map(e => e === elemento ? true: false)
             
          console.log(ojo)
      

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var numeros = [1,2,3,4,5];
  var sumados = 0;

    for(var i = 0; i < numeros.length;i++ ){

      sumados += numeros[i];

      

    }

    console.log(sumados);

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
      

  var listadotest = [1,2,3,4]

  var suma = 0


  for(var i = 0; i < listadotest.length;i++ ){
      
    suma += (listadotest[i]/2)
    
    

  }
  console.log(suma);

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var lista = [1,2,3,4,5,10]

  var numeromayor = 0;

  for(var i = 0; i < lista.length; i++ ){
  
      if(numeromayor < lista[i]){

        numeromayor = lista[i];
        
      }

}
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  function func1(a, b, c) {
    console.log(arguments[0]*arguments[1]*arguments[2]);
  
  
  }
  
  func1(1, 2, 3);
  



}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var lista = [1,2,3,4,555,66,77,8,]
  var contenedor = []
  var contador = 0

  for(var i = 0; i < lista.length; i++ ){
      
    if(lista[i] > 18){
      contenedor.push(lista[i])
      
      contador++
    }
    

}
console.log("el maximo de elementos mayor a 18 es: "+contador+" y estos son "+contenedor)

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   


  
  switch (numeroDeDia) {
    case 2:
      console.log("es dia laboral")
      break;
    case 1:
      console.log("es fin de semana")
     break;
     case 3:
      console.log("es dia laboral")
      break;
      case 4:
      console.log("es dia laboral")
      break;
      case 5:
      console.log("es dia laboral")
      break;
      case 6:
      console.log("es dia laboral")
      break;
      case 7:
      console.log("es fin de semana")
      break;
    default:
      console.log("no es nungun dia")
      break;
  }
  
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var n =  933122
  var numero = n.toString();

  console.log(numero)
  if (numero.startsWith( "9")){
     
    console.log('numero es 9')
  }else{
     
    console.log('numero no es 9')
   
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var numeros = ["1","1","1"];

  if(numeros.every( e => e == numeros[0])){
    console.log(numeros)
    console.log('es igual')
    return true;
  }else {
    console.log(numeros)
    console.log('no es igual')
    
    return false;
  }




} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var todosmeses = ['enero','marzo','noviembre',]
  var nuevosmeses = [];

      if(todosmeses.includes('enero') && todosmeses.includes('marzo') && todosmeses.includes('noviembre')){
        console.log("si estan los meses")
      }else{
          console.log("no estan los meses")
      }
      var filtrado = todosmeses.filter(mes => mes = nuevosmeses)

  
        console.table(filtrado);
            

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:


  var valores = [1,2,200,100,300,123,];

    var mayoresa100 = valores.filter(valor => valor > 100);

    console.table(mayoresa100.sort());


}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:


  var numero = 2;

  for(i = 0; i < 10; i++){

    numero = numero+2
    if(i === numero){
      console.log("Se interrumpió la ejecución el valor de i: "+i+" y el valor de el numero sumado 2 es: "+numero)
      break;
    }
   
  }
  console.table(numero)
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var numero = 0;

  for(i = 0; i < 10; i++){

    numero = numero+2
    if(i === 5){
      continue;
    }
    console.table(numero);
    
  }


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

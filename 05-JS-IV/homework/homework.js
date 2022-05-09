// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var edadreal = 29;
  var nombrereal = "juan";

  const nombre = {
   
      edad: edadreal,

      nombre: nombrereal,

      meow: function(){
        return "meow!"
      }

  };


    
      console.table(nombre);       
       console.table(nombre.meow());   



}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
   
  var listado = ["1","3"]

  const objeto = 
  {
    listado: null
  }
    console.log(objeto);


    //objeto.listado = null;

    console.log (objeto[listado]=null);
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto.metodo();
  
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:


  const objetoMisterioso = {

    numeroMisterioso: 10

  }

    console.log(objetoMisterioso.numeroMisterioso*5)

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  

  const objeto = 
  {

    unaPropiedad:"nombre",
    //otracosa: 1
  
  
  } 
    delete objeto.unaPropiedad 
    //  delete(objeto.unaPropiedad)

    console.log(objeto.unaPropiedad);
   // console.log(objeto);
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:


  var listaemails = ["1992@gmail.com",'1395jf']

    const objeto = {

      nombre: 'josmer',
      email: listaemails,
      password: 123


    }

    console.log(objeto);

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:


  const usuario = {

    email: ""
}

if(usuario.email){
console.log("hay contenido aqui")
return true

}else{
console.log("no hay contenido aqui")
return false;
}

}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  var objeto = 
  {

    propiedad: 'propiedad'

  }
  
    if(objeto.propiedad == "propiedad" && objeto.propiedad){
      console.log("la propiedad si existe y si tiene la palabra propiedad")
      return true;
  
    }else{
      console.log("la propiedad no existe o no tiene la palabra")
      return false;
  
    }


  



}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  
 
  var passwordexterna = 'pass'
    
      
  var usuario = {

      password:'pass'

  }
  if(passwordexterna == usuario.password){
    console.log("si hay contenido igual aqui")
    return true;
  }else{
    console.log("no hay contenido igual aqui")
    return false;
  }
  
  
}

function actualizarPassword() {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  
  var nuevapass = "nuevagPassword"
  
  var usuario = {

    password:'pass'

    }
    //antes del cambio
    console.log(usuario)
    usuario.password=nuevapass;
      //despues del cambio
    console.log(usuario)


}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:


  var usuario = {

    amigos: ['juan','carlo']

    }
    console.log(usuario);
    usuario.amigos.push('nuevoamigo')

    console.log(usuario);

}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  const usuarios = 
  [
    { 

    
      usuario: "esPremium"
    },
    {

      usuario: "esPremium"
    }
  
  ]
  console.log(usuarios)

  //adecuado para cambio de info .map
  //var resultado = usuarios.map( x => x.usuario = false);
  
  var resultado = usuarios.map( x => x.usuario = false);

  console.log(usuarios)



    console.log(resultado)

}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
 
  var posts = 
  [
    
    {
     
      post: 10
        
    },
    {
      post: 40
     
    },
    {
      post: 50,
      variable: 100
    } 
  
  ] 
  

  //var numeros = [1,2,3,4,5]
  //var sumados1 = posts.reduce((asd ,item) => {return Math.max(asd, item)});

  //var sumados2 = posts.reduce((das ,asd) => {return das += asd.masnumero},0);
  //var sumados3 = numeros.reduce(acc(numeros => numeros));
  var sumados3 = posts.reduce(function(suma,posts){

        return suma + posts.post
 },0);
   
  //var resultado = posts.map(x => x.post);
  var resultado = posts.map(function(posts){
      //sumar cierto valor de cada numero se agrega un contador al lado de el elemento
        return  posts.post 

    })

  var resultado2 = posts.filter(x => x.post)

  var resultado3 = posts.find(function(post){

      console.log(post.post)



  })
    

  console.log(resultado2)

}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  var producto = 
  {
    precio: 20,
    porcentajeDeDescuento: 0.2,
    
    
  
    calcularPrecioDescuento: function()
    {
       
      var descuento = this.precio-(this.precio*this.porcentajeDeDescuento)
      
      console.log(descuento)


          
    }

  }
     
      producto.calcularPrecioDescuento()
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};

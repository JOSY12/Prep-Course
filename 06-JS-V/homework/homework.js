// No cambies los nombres de las funciones.
function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  class usuarios {
    constructor(nombre, email, password, usuario) {
      this.nombre = nombre;
      this.usuario = usuario;
      this.email = email;
      this.password = password;
    }

    saludar() {
      console.log("hola, usuario " + this.nombre + " email:" + this.email);
    }
  }

  const usuario = new usuarios("Josmer", null);

  console.log(usuario.saludar());
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  class proto {
    constructor() {}
  }
  proto.prototype.saludo = function () {
    console.log("hola mundo");
  };
  var muestra = new proto();

  muestra.saludo();

  //funcional todo los metodos aqui 2 de 2
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  class revertido {
    constructor(frase) {
      this.frase = frase;
    }
  }
  revertido.prototype.revertidor = function () {
    var convertida = this.frase.split("");

    var finalizada = convertida.reverse().join("");

    console.log(finalizada);
  };
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: {
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

function prueba() {
  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }

    detalle() {
      var cosas = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio,
      };

      console.log(cosas);
    }
  }

  resultado = new Persona("", "", "", "");

  resultado.detalle();
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  class persona {
    constructor(nombre, apellido, edad, dir) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.dir = dir;
    }
  }

  var personacreada = new persona("juan", "perez", 22, "123");

  console.log(personacreada);
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"

  class persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }

    datos() {
      console.log(this.nombre, this.edad);
    }
  }

  var retorna = new persona("juan", 22);

  retorna.datos();
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
};

/* Este es un comentario */

var hola = "Hola Mundo";
let hello = "Hello World";
console.log(hola);
console.log(hello);
console.log(window.hola);
console.log(window.hello);
const PI = 3.1416;
console.log(PI);
let a;
a = "kenai";
console.log(a);
const objeto = {
  nombre: "jon",
  edad: 35,
};

const colores = ["blanco", "negro", "azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "jonmircha@gmail.com";
colores.push("anaranjado");

console.log(objeto);
console.log(colores);

let nombre = `Daniel`;
console.log(nombre);
let apellido = "Sanchez";
let saludo = new String("Hola Mundo");
let lorem = "lorem";

console.log(nombre, apellido, saludo);
console.log(nombre.length, apellido.length, saludo.length);

//Funcion Declarada
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//Invocacion de funcion
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

const san = {
  nombre: "Dan",
  apellido: "Sanchez",
  edad: 35,
  pasatiempos: ["correr", "nadar"],
  saludar: function () {
    console.log("Hola 😑");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y estas sacando un curso`
    );
  },
};

console.log(san);
console.log(san.decirMiNombre);
san.decirMiNombre();

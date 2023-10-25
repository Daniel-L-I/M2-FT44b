// *SIN ES6
// function functionDeclarativa() {
//     this.valor = 1
//     setTimeout(function () {
//         this.valor++
//         console.log(this.valor);
//     }, 1000
// }
// functionDeclarativa()

// *CON ES6
// const functionFlecha = () => {
//     this.valor = 1
//     setTimeout(() => {
//         this.valor++
//         console.log(this.valor);

//     }, 1000);
// }

// class Miclass{}
// function Miclass(params) {

// }
// *SIN ES6
// let valor = "hola a todo"
// let obj = {
//     valor:valor 
// }

// *CON ES6
// let valor = "hola a todo"
// let obj = {
//     valor,
// }
// ! Creación básica
// `En JavaScript '\n' es un salto`
// ! String simultáneo
// `En JavaScript esto
//  no es legal`
// ! Interpolación de strings
// let masCota = 'gato'
// let nobreMascota = 'dani'

// ? SIN ES6
// console.log('mi mascota es un  '+ masCota+ ' y se llama ' + nobreMascota);
// ? CON ES6
// console.log(`mi mascota un ${masCota} y  se llama ${nobreMascota}`);

// * Destructuring 

// const [a, , b] = [1, 2, 3]
// console.log(b);

// function getASTNode() {
//     return {
//         op: 'hola',
//         lhs: {
//             op: 'holasssss',
//             value: 3
//         },
//         rhs: {
//             op: 'sss',
//             value: 5
//         }
//     }
// }

// const {
//     op: a,
//     lhs: {
//         op: b
//     },
//     rhs: c
// } = getASTNode()

// console.log(c);
// console.log(a);
// *resumido
// const {op,lhs,rhs}= getASTNode()
// console.log(lhs);

// 
// function g({name:x}) {
//     console.log(x);
// }

// g({name:5})
// console.log(g);
// !error
// const [a] = []
// console.log(a === undefined);
// !error
// const [a = 1] = []
// console.log(a === 1);


// const persona = {
//     nombre: 'Camilla',
//     apellido: 'Sarra',
//     mascotas: ['Gomez', 'Margarita']
// }

// const { nombre, apellido, mascotas } = persona
// console.log(nombre);
// console.log(apellido);
// console.log(mascotas);

// const { nombre: nom, apellido: apr, mascotas } = persona
// !error
// console.log(nombre);

// const [a, b] = mascotas
// console.log(b);
// console.log(a);

// *Defaul 
// function suma(a = 10, b) {
//     return a + b
// }
// console.log(suma(8))

// *Spread opereator
// function two(x,...y) {
//     return x*y.length
// }
// console.log(two('3','hola',true,15));

// ? sin ES6
// let arr = [1,2,3]
// let arr1 = arr.concat([4,5,6])
// console.log(arr1);
// ? CON ES6
// console.log(...arr,4,5,6);

// ?
function persona(nombre, apellido, ...otroDato) {
    console.log(otroDato.length);
    return otroDato
}
console.log(persona('dani', 'hola', 'calle222', 3433321, 'desarrollador'));


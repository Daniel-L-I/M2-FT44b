// const saludo = alert('Soy el alert al final del HTML')

const button = document.querySelector('.btn')
// console.log(button);

button.addEventListener('click', function (evento) {
    // console.log(evento);
    // console.log(evento.target);
    console.log(evento.target.value);
})

const div = document.getElementById('divContainer')
// console.log(div);
div.innerHTML = 'Hello World'

const divs = document.getElementsByTagName('div')

// console.log(divs);

const estiloDiv = document.querySelector('#despedida')

console.log(estiloDiv);

estiloDiv.style.color = 'blue'


// *  Creando elementos...
const utiles = ['lápiz', 'cuaderno', 'colores', 'borrador', 'regla', 'resaltador']

const lista = document.getElementById('lista')

utiles.forEach(function (util) {
    const elemento = document.createElement('li')
    elemento.innerHTML = util
    lista.appendChild(elemento)
})
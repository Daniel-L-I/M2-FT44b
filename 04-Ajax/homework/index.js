const { text } = require("express")

let imagen = $('img')
imagen.hide()

const lista = $('#lista')
const boton = $('#boton')
const URL = 'http://localhost:5000/amigos'


const listFriends = (info) => {
    console.log(info);
    for (const item of info) {
        lista.append(`<li>${item.id}-${item.name}</li>`)
    }
    imagen.hide()
}

boton.on('click', function () {
    imagen.show()
    lista.empty()
    // * poner un get 
    $.get(URL, listFriends)
})
boton.click

// ? buscar amigos

const search = $('#search')
const inputFrends = $('#input')
const amigo = $('#amigo')
// delet 
const inputDelete = $('inputDelete')
const btnDalete = $('delete')
const successFriend = $('#success')

const cleanInputs = () => {
    inputFrends.val('')
    inputDelete.val('')
}
const nameFriens = (info) => {
    amigo.text(info.name)
    cleanInputs()
}

const notFoundFriens = () => {
    amigo.text(`el amigo con el id ${inputFrends.val()} no existe`)
    cleanInputs()
}

const validedId = (id, input) => {
    if (input === inputFrends && !id) return amigo.text('No has ecrito ID')
    if (input === inputDelete) return amigo.text('No has ecrito ID')
}


const showFriendName = () => {
    let id = inputFrends.val()
    $.get(`${URL}/${id}`, nameFriens).fail(notFoundFriens)
}
search.on('click', showFriendName)


// * ELIMINAR AMIGO

const deleteFriens = function () {
    const idDalete = inputDelete.val()
    validedId(idDalete)
    $.ajax({
        url: `${URL}/${idDalete}`,
        type: "DELETE",
        success: () => {
            successFriend.text(`amigo numero ${idDalete} a sido eliminado con exito`)
            cleanInputs()
        }
    })
}
btnDalete.on(deleteFriens)

// falta get frens
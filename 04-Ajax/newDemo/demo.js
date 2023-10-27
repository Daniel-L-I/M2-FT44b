var index = 1;

//?  $('.boton') =  es igual a document.querySelector('.boton')
$('.boton').on('click',function () { // !parecido addEventListener 
    // GET AJAX
    $.get("https://jsonplaceholder.typicode.com/photos/" + index, function (data) {
        // vanilla javascript
        var img = document.createElement('img');
        img.src = data.url;
        var title = document.createElement('h3');
        title.textContent = data.title;
        $('#respuesta').append(img);
        $('#respuesta').append(title);
        index++;
    });

});




// ! delete

$('#delet').click(function () {
   const inputDelete = $('#inputDelete')
   $.ajax({
    url:`http://localhost:5000/amigos/${inputDelete}`,
    type:'DELETE',
    success:()=>{
        $('#success').text(`amigo numero ${inputDelete} a sido eliminado con exito`)
        getAmigo()//* 
    }
   })
})
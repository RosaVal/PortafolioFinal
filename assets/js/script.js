
$(function () {
    $("#enviameunmail").click(
    function() {
        alert("El Correo fue enviado correctamente")
    }) 

    $('.card-title').on("click", function(){
    $('.card-text').toggle()
    })
})

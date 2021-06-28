
$( document ).ready(function() {
    let apiKey = 'adcbd9b055d3b22b09749c76fb773456'
    let idCiudad = 3871336
    let units = 'metric'
    

    $.get({
        url: 'https://api.openweathermap.org/data/2.5/weather?id='+idCiudad+'&appid='+apiKey+'&units='+units,
        success: function(listado){

            let contenedor = $('#clima')
            contenedor.empty()

            console.log(listado)
            


                contenedor.append(
                    "<div id='location'>"+listado.name+"</div>" +
                    "<div id='temperature'>"+listado.main.temp+"°C</div>" +
                    //"<div id='humedad'><i class='fa fa-tint mr-2' aria-hidden='true'></i>"+listado.main.humidity+"%</div>" +
                    //"<div id='pressure'><img src='https://i.imgur.com/B9kqOzp.png' height='17px'>"+listado.wind.speed+"</div>" +
                    //"<div id='date'>
                    "</div>"
                )
                
         
        },
        error: function(mensajeError){
            console.error(mensajeError)
        }
    }) // fin get

}); // fin document ready




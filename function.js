
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Localizacion no esta soportada por tu navegador, por favor usa otro navegador.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red'
}); 

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white'
}); 

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none'
}); 

const collection = document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++) {
    collection [i].style.backgroundColor = "yellow";
}
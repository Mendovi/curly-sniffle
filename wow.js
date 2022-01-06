let socket = new WebSocket("wss://mendovi.github.io/curly-sniffle/");
function viewDiv(){
  document.getElementById("div1").style.display = "block";
};





function car_down () {x = 0;
x = document.getElementById("moto").offsetTop;
xn = x + 50;
document.getElementById("moto").style.top = xn+"px"
socket.send(document.getElementById("moto").style.left);
}
function car_up () {
x = 0;
x = document.getElementById("moto").offsetTop;
xn = x - 50;
document.getElementById("moto").style.top = xn+"px"
socket.send(document.getElementById("moto").style.left);
}
function car_left () {
x = 0;
x = document.getElementById("moto").offsetLeft;
xn = x - 50;
document.getElementById("moto").style.left = xn+"px"
socket.send(document.getElementById("moto").style.left);
}
function car_right () {
x = 0;
x = document.getElementById("moto").offsetLeft;
xn = x + 50;
document.getElementById("moto").style.left = xn+"px"
socket.send(document.getElementById("moto").style.left);
}


function cat_down () {x = 0;
x = document.getElementById("caat").offsetTop;
xn = x + 50;
document.getElementById("caat").style.top = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_up () {
x = 0;
x = document.getElementById("caat").offsetTop;
xn = x - 50;
document.getElementById("caat").style.top = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_left () {
x = 0;
x = document.getElementById("caat").offsetLeft;
xn = x - 50;
document.getElementById("caat").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_right () {
x = 0;
x = document.getElementById("caat").offsetLeft;
xn = x + 50;
document.getElementById("caat").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}





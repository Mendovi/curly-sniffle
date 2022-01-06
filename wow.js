let socket = new WebSocket("wss://mendovi.github.io/curly-sniffle/");





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
	


var curPosX = 0;
var curPosY = 0;
var interval;
var n = 50; // На сколько двигать за раз
var width = document.documentElement.clientWidth; // Ширина экрана
var height = document.documentElement.clientHeight; // Высота экрана
var imgWidth = 100; // Ширина картинки
var imgHeight = 100; // Высота картинки
var img1 = document.getElementById("img1");

function move() {
  img1.style.left = (curPosX += n) + "px";
  img1.style.top = (curPosY += n) + "px";
  if ((curPosX == (width - imgWidth)) || (curPosY == (height - imgHeight))) {
    clearInterval(interval);
  }
}
interval = setInterval(move, 100);

        var i=0;
        var image=document.getElementById("caat");
        Без названия.png, f68ff22b3f7914c2.png //Добавьте свои картинки в массив через запятую
        var imgs=new Array('img1.jpg','img2.jpg');
        function imgsrc() {
            i++;i%=imgs.length;
            image.src = imgs[i];
        }


$(".plus").click(function() {
  var $price = $(".singleInfo__price");
  $price.val(parseInt($price.val()) + 1);
  $price.change();
});

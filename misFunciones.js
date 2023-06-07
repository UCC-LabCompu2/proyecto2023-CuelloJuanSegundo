function calcularTirot() {
    var num1, num2;
    num1=document.getElementsByName("tiempo")[0].value;
    document.getElementsByName("resultadoVI")[0].value = 9.8 * num1;
    document.getElementsByName("resultadoH")[0].value = (resultadoVI ** 2) / 2 * 9.8;

}
function calcularTiroh(){
    var num1, num2;
    num1=document.getElementsByName("altura")[0].value;
    num2 = Math.sqrt(9.8 * 2 * num1);
    document.getElementsByName("resultadoVI")[0].value=num2;
    document.getElementsByName("resultadoT")[0].value = resultadoVI / 9.8;

}
function calcularTirovi(){
    var num1;
    num1 = document.getElementsByName("velocidadInicial")[0].value;
    document.getElementsByName("resultadoT")[0].value = num1 / 9.8;
    document.getElementsByName("resultadoH")[0].value = (num1 ** 2) / (2 * 9.8);

}

function dibujarImagen(posX, posY){
    var canvas = document.getElementById("Mycanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX,posY);
    var img = new Image();
    img.src = "imagenes/canvas.jpeg";
    canvas.width = canvas.width;
    img.onload = function(){
        ctx.drawImage(img, posX, posY);
    }

}
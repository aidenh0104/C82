var mouseEvent="empty";
var Last_position_of_x,Last_position_of_y;

canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDownn";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of x and y coordniates is:");
    console.log("x="+Last_position_of_x+",y="+Last_position_of_y);
    ctx.moveTo(Last_position_of_x,Last_position_of_y);
    
    console.log("current position of x and y coordniates is:");
    console.log("x="+current_position_of_mouse_x+",y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
    
}
Last_position_of_x=current_position_of_mouse_x;
Last_position_of_y=current_position_of_mouse_y;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
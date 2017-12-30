//####### RESSOURCES
var cloudImage = document.getElementById("cloudImage");
var cactusImage = document.getElementById("cactusImage");


//####### CANVAS
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";

ctx.font = "20px 'Hermit'";

//####### ANIMATION
window.requestAnimationFrame =
	window.requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.msRequestAnimationFrame;


var then = 0.3;
var progress;


//###### ENGINE
function step(timestamp) {
    if(ENGAGE){
        progress = 0.1;
        then = timestamp;
        ENGAGE = false;
    }
    else{
        var now = timestamp;
        progress = now - then;
        then = now;        
    }

	update();
	draw();
    
    if(ALIVE) requestAnimationFrame(step);
    else drawGameOver();
}

draw();
drawHome();
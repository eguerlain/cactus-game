function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawField();
    drawSky();
    drawBonus();
    drawObstacles();
    drawPerso();
    drawHUD();

    //drawDebug();
}

function drawSky(){
    if(SKY.COLOR){
        ctx.fillStyle = SKY.COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height - FIELD.HEIGHT);
    }
    SKY.clouds.forEach(drawCloud);
}

function drawCloud(cloud){
    ctx.drawImage(cloudImage, cloud.x, canvas.height - FIELD.HEIGHT - cloud.y, 40, 40);
}

function drawField(){
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    drawLine(
        {x: 0, y: canvas.height - FIELD.HEIGHT},
        {x: canvas.width, y: canvas.height - FIELD.HEIGHT}
    );
}

function drawLine(a, b){
	ctx.beginPath();
	ctx.moveTo(a.x, a.y);
	ctx.lineTo(b.x, b.y);
	ctx.stroke();
	ctx.closePath();
}

function drawBonus(){
    if(BONUS && BONUS.virgin){
        ctx.fillStyle = "#333";
        ctx.font = "40px 'Courier'";
        for(var i=0; i < BONUS.length ; i++){
            ctx.fillText(BONUS.letters[i], 350 + 50 * i, canvas.height - FIELD.HEIGHT*0.3);
        }
    }
}

function drawObstacles(){
    OBSTACLES.forEach(drawObstacle);
}

function drawObstacle(obstacle){
    ctx.drawImage(
        cactusImage,
        obstacle.x - OBSTACLE_SIZE/2,
        canvas.height - FIELD.HEIGHT - OBSTACLE_SIZE*3 - obstacle.y,
        OBSTACLE_SIZE*3,
        OBSTACLE_SIZE*3);
}

function drawPerso(){
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    drawCircle(
        PERSO.X,
        canvas.height - FIELD.HEIGHT - PERSO.Y - PERSO.SIZE,
        PERSO.SIZE
    );
}

function drawCircle(x, y, radius){
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

function drawHUD(){
    //SCORE
    ctx.fillStyle = "black";
    ctx.font = "20px 'Hermit'";
    ctx.fillText("Score : " + SCORE, HUD.SCORE.x, HUD.SCORE.y);

    drawLife();
}

function drawLife(){
    if(LIFE < LIFE_MAX){
        ctx.fillStyle = "#e20000";
        ctx.fillRect(0, 0, canvas.width-LIFE*canvas.width/LIFE_MAX, 7);
    }
}

function drawHome(){
    ctx.fillStyle = "black";
    ctx.font = "60px 'Courier'";
    ctx.fillText("Press space bar...", 200, 200);
}

function drawGameOver(){
    ctx.fillStyle = "black";
    ctx.font = "60px 'Courier'";
    ctx.fillText("GAME OVER", 300, 200);
}

function drawDebug(){
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";

    drawPoint(PERSO.X, PERSO.Y, true);

    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";

    drawPoint(PERSO.X + PERSO.SIZE, PERSO.Y, false);
    drawPoint(PERSO.X + PERSO.SIZE, PERSO.Y + PERSO.SIZE*2, false);
    drawPoint(PERSO.X - PERSO.SIZE, PERSO.Y, false);
    drawPoint(PERSO.X - PERSO.SIZE, PERSO.Y + PERSO.SIZE*2, false);


    for(var i = 0; i<NB_OBSTACLES; i++){
        ctx.fillStyle = "green";
        ctx.strokeStyle = "green";
        var obs = OBSTACLES[i];

        drawPoint(obs.x, obs.y, false);

        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "yellow";

        drawPoint(obs.x + OBSTACLE_SIZE*2, obs.y);
        drawPoint(obs.x, obs.y + OBSTACLE_SIZE*2);
        drawPoint(obs.x + OBSTACLE_SIZE*2, obs.y + OBSTACLE_SIZE*2);
    }

    for(var i = 0; i < SKY.clouds.length; i++){
        ctx.strokeStyle = "black";
        var cloud = SKY.clouds[i];

        drawPoint(cloud.x, cloud.y);
        drawPoint(cloud.x + CLOUD.SIZE, cloud.y - CLOUD.SIZE);

        ctx.font = ("20px Arial");
        ctx.fillStyle = "black";
        ctx.fillText(i, cloud.x + 15, canvas.height - FIELD.HEIGHT - cloud.y + 30);
    }

}

function drawPoint(x, y, text){
    drawCircle(x, canvas.height - FIELD.HEIGHT - y, 2);
    if(text){
        ctx.font = "10px Arial";
        ctx.fillText(x + ' : ' + y, x, canvas.height - FIELD.HEIGHT - y + 10);
    }
}

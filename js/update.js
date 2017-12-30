function update(){
    // Check if collision with cactus
    COLLISION = collision();

    updatePerso();
    updateObstacles();
    updateSky();
    updateBonus();
    updateJetpack();
    updateLife();
}

function updatePerso(){
    applyGravity(PERSO);
}

function updateObstacles(){
    OBSTACLES.forEach(moveObstacle);
}

function moveObstacle(obstacle){
    obstacle.x -= GAME_SPEED*progress/80;
    if(obstacle.x < -20) {
        obstacle.x = canvas.width + Math.random()*300;
        SCORE += 1;
        NB_JUMPED_CACTUS += 1;
    }
}

function updateSky(){
    SKY.clouds.forEach(moveCloud);
}

function moveCloud(cloud){
    cloud.x -= SKY.SPEED * progress / 1000;
    if(cloud.x < -50){
        cloud.x = canvas.width + 30;
        cloud.y = 100 + Math.random()*240;
    }
}

function applyGravity(THING){
    if(THING.Y > 0){
        THING.Y_SPEED = (-(FIELD.GRAVITY) * progress) + THING.Y_SPEED;
        THING.Y += THING.Y_SPEED/progress/30;
    } else{
        THING.Y = 0;
        THING.Y_SPEED = 0;
        THING.FLYING = false;
    }
}

function updateBonus(){
    if(NB_JUMPED_CACTUS - LAST_BONUS_LEVEL >= 20 && !BONUS){ // Could modify 20 to NEXT_BONUS
        LAST_BONUS_LEVEL = NB_JUMPED_CACTUS;
        var i = Math.floor(Math.random() * BONUSLIST.length);
        BONUS = BONUSLIST[i];
//        BONUS = BONUSLIST[2]; // To test a specific bonus
    }
}

function updateJetpack(){
    if(JETPACK){
        var col = cloudCollision();
        console.log(col);
//        if(col){
//            SCORE += 300;
//            SKY.clouds[i].x = canvas.width + 30;
//            SKY.clouds[i].y = 100 + Math.random()*240;
//        }
    }
}

function updateLife(){
    LIFE -= COLLISION ? Math.floor(progress) : (LIFE < LIFE_MAX) ? HEALING : 0;
    LIFE = (LIFE > LIFE_MAX) ? LIFE_MAX : LIFE;
    if(LIFE < 0){
        ALIVE = false;
    }
}

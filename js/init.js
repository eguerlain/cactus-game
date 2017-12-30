// ####### FIELD
var FIELD = {
    HEIGHT: 50,
    GROUND: canvas.height - 50,
    GRAVITY: 9.81
};

// ####### PERSO
var PERSO = {
    SIZE: 10,
    X: 170,
    Y: 0,
    Y_SPEED: 0,
    JUMP: 4000,
    FLYING: true
};

// ####### SKY
var CLOUD = {
    SIZE: 30
}

var SKY = {
    COLOR: false,
    SPEED: 30,
    NB_CLOUDS: 10,
    clouds : []
}

for(var i = 0; i < SKY.NB_CLOUDS; i++){
    SKY.clouds.push({x: Math.random()*canvas.width, y: 100 + Math.random()*240});
}

// ####### HUD
var HUD = {
    SCORE: {
        x: 30,
        y: 30
    }
}

// ####### GAME GLOBALS
var ALIVE = true;
var PLAYING = false;
var ENGAGE = true;
var SCORE = 0;
var NB_JUMPED_CACTUS = 0;
var GAME_SPEED = 10;
var LIFE_MAX = 350;
var LIFE = LIFE_MAX;
var COLLISION = false;
var HEALING = -0.5; //Needs to be negative

// ####### OBSTACLES
var OBSTACLE_SIZE = 10;
var NB_OBSTACLES = 5;
var OBSTACLES = [];

for (var i = 0; i < NB_OBSTACLES; i++){
    OBSTACLES.push({x: 200 + Math.random()*1500, y: 0});
}

// ####### KEYS && CHEATS
var keyHistory = [];
var BONUS = false;
var LAST_BONUS_LEVEL = 0;
var CAN_BONUS = false; // Tells if player can receive a bonus
var timeoutBonus;

var BONUSLIST = [
    {
        virgin: true,
        length: 5,
        code: "77,79,78,69,89",
        name: "Money",
        letters: ['M', 'O', 'N', 'E', 'Y'],
        time: 1,
        action: function(){
            SCORE += 100;
            BONUS.virgin = false;
            window.setTimeout(BONUS.cleanup, BONUS.time*1000);
        },
        cleanup: function(){
            BONUS.virgin = true;
            BONUS = false;
            LAST_BONUS_LEVEL = NB_JUMPED_CACTUS;
        }
    },
    {
        virgin: true,
        length: 5,
        code: "76,85,78,65,82",
        name: "Lunar",
        letters: ['L', 'U', 'N', 'A', 'R'],
        time: 10,
        action: function(){
            FIELD.GRAVITY = 4;
            BONUS.virgin = false;
            timeoutBonus = window.setTimeout(BONUS.cleanup, BONUS.time*1000);
        },
        cleanup: function(){
            FIELD.GRAVITY = 9.81;
            BONUS.virgin = true;
            BONUS = false;
            LAST_BONUS_LEVEL = NB_JUMPED_CACTUS;
        }
    },
    {
        virgin: true,
        length: 7,
        code: "74,69,84,80,65,67,75",
        name: "Jetpack",
        letters: ['J', 'E', 'T', 'P', 'A', 'C', 'K'],
        time: 20,
        action: function(){
            SKY.SPEED*=4;
            SKY.COLOR = "#90f2f9";
            GAME_SPEED *= 2;
            FIELD.GRAVITY = 3;
            JETPACK = true;
            BONUS.virgin = false;
            timeoutBonus = window.setTimeout(BONUS.cleanup, BONUS.time*1000);
        },
        cleanup: function(){
            SKY.SPEED/=4;
            SKY.COLOR = false;
            JETPACK = false;
            FIELD.GRAVITY = 9.81;
            GAME_SPEED /= 2;
            BONUS.virgin = true;
            BONUS = false;
            LAST_BONUS_LEVEL = NB_JUMPED_CACTUS;
        }
    }
];

var JETPACK = false;
var JETPACK_POWER = 400;

function abortBonus(){
    window.clearTimeout(timeoutBonus);
    BONUS.cleanup();
}
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
//    console.log(e.keyCode);

    if (e.keyCode == '38' || e.keyCode == 32) {	// UP arrow OR Space
        if(!PLAYING){
            requestAnimationFrame(step);
            PLAYING = true;
        }
        if(!PERSO.FLYING && !JETPACK) jump();
        if(JETPACK){
            PERSO.Y += 2;
            PERSO.Y_SPEED += JETPACK_POWER;
        }
    }
    else if (e.keyCode == '40') {	// DOWN arrow
        
    }
    else if (e.keyCode == '37') {	// LEFT arrow

    }
    else if (e.keyCode == '39') {	// RIGHT arrow

    }
    else if (e.keyCode == '66') {   // B
        if(BONUS) abortBonus();
    }
    
    // Traitement du keyHistory pour les cheats
    if(BONUS && BONUS.virgin){
        keyHistory.push(e.keyCode);
        if(keyHistory.length >= BONUS.length){
            if(keyHistory.join(',')==BONUS.code){
                BONUS.action();
                keyHistory = [];
            }
            keyHistory.shift();
        }
    }

}

function jump(){
    PERSO.Y += 2;
    PERSO.Y_SPEED += PERSO.JUMP;
    PERSO.FLYING = true;
}
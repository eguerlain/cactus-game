function distance(a, b){
	var X = b.x - a.x;
	var Y = b.y - a.y;
	return (Math.sqrt((X*X) + (Y*Y)));
}

function closest(a, b){
	if(b.length){
		var closest = b[0];
		var minimum = distance(a, b[0]);

		for(var i=0; i < b.length; i++){
			if(distance(a, b[i]) < minimum){
				closest = b[i];
				minimum = distance(a, closest);
			}
		}
		return (closest);
	}
	else {
		return ({x: Infinity, y: Infinity});
	}
}

function collision(){
    for(var i = 0; i < NB_OBSTACLES; i++){
        var obs = OBSTACLES[i];
        if(
            (PERSO.X + PERSO.SIZE >  obs.x)
            &&
            (PERSO.X - PERSO.SIZE < obs.x + OBSTACLE_SIZE * 2)
            &&
            (PERSO.Y < obs.y + OBSTACLE_SIZE * 2)
            &&
            (PERSO.Y + PERSO.SIZE * 2 > obs.y)
        )
            return true;
    }
    return false;
}

function cloudCollision(){
    for(var i = 0; i < SKY.clouds.length; i++){
        var cloud = SKY.clouds[i];
        if(
            (PERSO.X + PERSO.SIZE >  cloud.x)
            &&
            (PERSO.X - PERSO.SIZE < cloud.x + CLOUD.SIZE)
//            &&
//            (PERSO.Y < cloud.y - CLOUD.SIZE)
//            &&
//            (PERSO.Y + PERSO.SIZE * 2 > cloud.y)
        )
            return i;
    }
    return false;
}

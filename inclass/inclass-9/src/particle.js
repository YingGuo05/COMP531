const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

// default values
const particle = ({
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
} = {}) => {
    return {acceleration, velocity, position, mass}
}

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
	// IMPLEMENT ME
    velocity[0] = velocity[0]+delta*acceleration[0];
    velocity[1] = velocity[1]+delta*acceleration[1];
    position[0] += velocity[0]*delta;
    position[1] += velocity[1]*delta;
    if(canvas){
        if(position[0] - mass > canvas[0]){
            position[0] -= velocity[0]*delta;
            velocity[0] = -1*velocity[0];
        }
        if(position[0] - mass < 0){
            position[0] -= velocity[0]*delta;
            velocity[0] = -1*velocity[0];
        }
        if(position[1] - mass > canvas[1]){
            position[1] -= velocity[1]*delta ;
            velocity[1] = -1*velocity[1];
        }
        if(position[1] - mass < 0){
            position[1] -= velocity[1]*delta;
            velocity[1] = -1*velocity[1];
        }
    }
    
    
    return { mass, acceleration, velocity, position }
}

export default particle

export { update }

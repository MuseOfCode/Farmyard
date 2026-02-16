class Character extends FarmObject {
    constructor(configObj){
        super(configObj)
        this.tileStepsRemaining = 32;

        this.directionVectors = {
            "up": ["y", -1],
            "down": ["y", 1],
            "right": ["x", 1],
            "left": ["x", -1],

        }
    }

    update(state){
        this.updatePosition()
    }

    updatePosition(){
        if(this.tileStepsRemaining > 0){
            const [axis, change] = this.directionVectors[this.direction]
            this[axis] += change
            this.tileStepsRemaining -= 1
        }
    }

  
}
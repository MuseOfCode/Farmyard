class Character extends FarmObject {
    constructor(configObj){
        super(configObj)
        this.tileStepsRemaining = 16;

        this.directionVectors = {
            "up": ["y", -1],
            "down": ["y", 1],
            "right": ["x", 1],
            "left": ["x", -1],

        }
    }

    update(state){
        this.updatePosition()

        if(this.tileStepsRemaining === 0 && state.arrow){
            this.direction = state.arrow
            this.tileStepsRemaining = 16
        }
    }

    updatePosition(){
        if(this.tileStepsRemaining > 0){
            const [axis, change] = this.directionVectors[this.direction]
            this[axis] += change
            this.tileStepsRemaining -= 1
        }
    }

  
}
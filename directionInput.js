class DirectionInput {
    constructor(){
        this.heldDirections = []

        this.arrowMap = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right",

        }
    }

    get direction(){
        return this.heldDirections[0]
    }

    begin(){
        document.addEventListener("keydown", e => {
            console.log(e.code)

            //searches in arrowMap obj
            const directionKey = this.arrowMap[e.code]

            //move to beginning of heldDirections array
            if(directionKey && this.heldDirections.indexOf(directionKey) === -1){
                this.heldDirections.unshift(directionKey)
            }
        })

        document.addEventListener("keyup", e => {
            const directionKey = this.arrowMap[e.code]
            const index = this.heldDirections.indexOf(directionKey)
            if( index > -1){
                this.heldDirections.splice(index, 1)
            }
        })
    }
}
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

    begin(){
        document.addEventListener("keydown", e => {
            console.log(e.code)

            //searches in arrowMap obj
            const directionKey = this.arrowMap[e.code]

            if(directionKey && this.heldDirections.indexOf(directionKey) === -1){
                this.heldDirections.unshift(directionKey)
            }
        })
    }
}
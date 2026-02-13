class Farmland {
    constructor(configObj){
        this.element = configObj.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.renderCtx = this.canvas.getContext("2d")
    }

    begin(){
        
        const testMap = new Image()
        testMap.onload = () => {
            this.renderCtx.drawImage(testMap, 0, 0)
        }
        testMap.src = "assets/maps/testMap.png"

        const farmer = new Image()
        farmer.onload = () => {
            this.renderCtx.drawImage(farmer, 0, 0, 16, 32, 0, 0, 16, 32)
        }

        farmer.src = "assets/sprites/player.png"
    }


}
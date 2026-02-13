class Farmland {
    constructor(configObj){
        this.element = configObj.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.renderCtx = this.canvas.getContext("2d")
    }

    begin(){
        console.log("Hello???")
    }


}
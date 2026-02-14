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

    const farmer = new FarmObject({
        x : 50,
        y : 50,

    })

    
    setTimeout(() => {
          farmer.sprite.draw(this.renderCtx)
    

    }, 100)


    }


}
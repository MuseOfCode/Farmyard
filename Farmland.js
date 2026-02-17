class Farmland {
    constructor(configObj){
        this.element = configObj.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.renderCtx = this.canvas.getContext("2d")
        this.map = null;
    }

    runGameLoop(){
        const step = () => {

            this.map.drawMapImage(this.renderCtx)
           
            Object.values(this.map.farmObjects).forEach(object => {
                object.update({
                    arrow : this.directionInput.direction
                })
                object.sprite.draw(this.renderCtx)
            })

            requestAnimationFrame(() => {
                step()
            })
        }
        step()
    }


    begin(){

        this.map = new FarmlandMap(window.FarmlandMaps.testMapHouse)

        this.directionInput = new DirectionInput()
        this.directionInput.begin()
        this.directionInput.direction

        this.runGameLoop()




    }


}
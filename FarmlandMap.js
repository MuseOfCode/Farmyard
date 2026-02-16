class FarmlandMap {
    constructor(configObj){
        this.farmObjects = configObj.farmObjects
        this.mapImage = new Image()
        this.mapImage.src = configObj.mapImage

        
    }

    drawMapImage(renderCtx){
        renderCtx.drawImage(this.mapImage, 0, 0)
    }
}

window.FarmlandMaps = {
    testMap: {
        src : "assets/maps/testMap.png",
        farmObjects: {
            farmer: new FarmObject({
                x: 20,
                y: 20
            })
        },

        testMapHouse: {
            src : "assets/maps/testMap-house.png",
            farmObjects : {
                farmer: new FarmObject({
                     x: 30,
                     y: 10
                })
            }
        }
    }
}
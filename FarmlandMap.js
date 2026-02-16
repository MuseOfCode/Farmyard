class FarmlandMap {
    constructor(configObj){
        this.farmObjects = configObj.farmObjects


        this.mapImage = new Image()
        this.mapImage.src = configObj.mapSrc

        
    }

    drawMapImage(renderCtx){
        renderCtx.drawImage(this.mapImage, 0, 0)
    }
}

window.FarmlandMaps = {
    testMap: {
        mapSrc : "assets/maps/testMap.png",
        farmObjects: {
            farmer: new FarmObject({
                x: 20,
                y: 20
            })
        }

        
    },

    testMapHouse: {
            mapSrc : "assets/maps/testMap-house.png",
            farmObjects : {
                farmer: new Character({
                     x: 30,
                     y: 10
                })
            }
        }
}
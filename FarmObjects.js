class FarmObject {
    constructor(configObj){

        //obj axis position 
        this.x = configObj.x 
        this.y = configObj.y
        this.cutWidth = configObj.cutWidth || 16
        this.cutHeight = configObj.cutHeight || 32
        this.sprite = new AnimatedSprite({
            owner: this,
            src: configObj.src || "assets/sprites/player.png"
        })
    }
}
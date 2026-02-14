class AnimatedSprite {
    constructor(configObj){

        //owner = ref the farm object that sprite represents
        this.owner = configObj.owner

        this.image = new Image()
        this.image.src = configObj.src
        this.image.onload = () =>
        {this.isImageLoaded = true}


        this.allAnimations = configObj.allAnimations || {
            idleRight : [
                [0,0]
            ]
        }

        this.currentAnimation = configObj.currentAnimation 
        this.currentAnimationFrame = 0;

        
    }

    draw(renderCtx){

        const x = this.owner.x
        const y = this.owner.y
        const cutWidth = this.owner.cutWidth
        const cutHeight = this.owner.cutHeight

        this.isImageLoaded && renderCtx.drawImage(this.image, 
            0,0,
            cutWidth, cutHeight,
            x, y,
            16, 32
        )

    }
}
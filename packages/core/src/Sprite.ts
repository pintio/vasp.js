import CanvasImage from "./Image"

class Sprite {
    private _speed = 1
    private image : CanvasImage

    constructor(image: CanvasImage){
        this.image = image
    }

    set speed(speed: number){
        this._speed = speed
    }

    public move(){
        if(this.image.position.positionX <= -this.image.position.width) this.image.position.positionX = 0
        this.image.position.positionX = this.image.position.positionX - this._speed
    }

    get canvasImage(){
        return this.image
    }

    // public draw(){}
}

export default Sprite
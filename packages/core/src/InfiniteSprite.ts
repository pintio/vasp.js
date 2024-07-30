import GameOptions from "./GameOptions";
import CanvasImage from "./Image";
import Position from "./Position";

// TODO: fix bug
// BUG: when the ratiodWidth of the image is less than the width of the canvas, there is flicker when the reset happens. 
// Porbable solution : rather than using two images, decide the number of images depending on the width of the canvas and the ratioed width of the image. 

class InfiniteSprite {
    private img1: CanvasImage
    private img2: CanvasImage

    private _speedModifier = 20

    private gameOptions = GameOptions.get()

    // Ratioed width of the image, 
    // To fit image in the canvas, the image needs to be resized to the size of the canvas, i.e. if the og image has height of 800 and canvas has height of 500
    // The image needs to be resized to match the height of the canvas, and to maintain the ratio, the image's width is ratioed agains the new heigth.
    private width: number

    constructor(src: string, canvasPos : Position) {

        this.img1 = new CanvasImage(src, {height: 0, width: 0, positionX: 0, positionY: 0, paddingX: 0})

        const {width: sw, height: sh} = this.img1.position
        const {height: dh} = canvasPos

        const ratio = sh/dh

        const wd = Math.floor(sw/ratio)
        this.width = wd

        this.img2 = new CanvasImage(src, {height: 0, width: 0, positionX: 0, positionY: 0, paddingX: wd})
        this.img2.onload = ()=>{
            this.img2.position.ratioedWidth = wd
        }
        this.img1.onload = ()=>{
            this.img1.position.ratioedWidth = wd
        }
    }

    set speedModifier(mod:number){
        this._speedModifier = mod
    }

    public move(){
        let x = this.img1.position.positionX
        if(x <= -this.width) x = 0
        x = x - this._speedModifier + this.gameOptions.speed

        this.img1.position.positionX = x
        this.img2.position.positionX = x
    }

    public getSprites(){
        return [this.img1, this.img2]
    }
}

export default InfiniteSprite
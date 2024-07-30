import CanvasImage from "./Image";

// TODO: make it use Position, instead of getting sizes directly.

class Canvas {

    private static instance?: Canvas
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D | null

    private constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d');
    }

    public static getCanvas(): Canvas{
        if(!this.instance){
            this.instance = new Canvas()
        }
        return this.instance
    }

    set height(height: number){
        this.canvas.height = height
    }

    set width(width: number){
        this.canvas.width = width
    }

    set container(container: HTMLElement){
        if(this.canvas){
            container.appendChild(this.canvas)
        } else{
            throw new Error("Canvas does not exist")
        } 
    }

    public clear(){
        this.ctx?.clearRect(0,0, this.canvas.width, this.canvas.height)
    }

    // Confusing and not readable.
    // TODO: refactor and put comments explaining how it works
    public drawImage(image: CanvasImage){
        // sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number
        const {positionX: dx, positionY: dy, height: sh, width: sw, paddingX, ratioedWidth} = image.position

        const dw = this.canvas.width
        const dh = this.canvas.height

        const draw = ()=> {
            this.ctx?.drawImage(image.image, 0, 0, sw, sh, (dx || 0) + paddingX, dy || 0, ratioedWidth || dw, dh)
            return null
        }
        if(this.ctx){
            if(!image.image.complete){
                image.image.onload = draw()

            } else{
                draw()
            }
        } else{
            throw new Error("Context/Canvas does not exist")
        }
    }

    public drawImages(images: CanvasImage[]){
        images.forEach(img => {
            this.drawImage(img)
        })
    }

    // absolutely useless for now
    // TODO: remove it if no use
    get ratio(){
        return this.canvas.width/ this.canvas.height
    }
}


export default Canvas
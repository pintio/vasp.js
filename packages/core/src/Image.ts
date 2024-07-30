import Position from "./Position"

type OnLoadHandler = (ev: Event) => any

class CanvasImage {
    private imageEl: HTMLImageElement
    public position: Position

    private onLoadHandlers: OnLoadHandler[] = []

    // TODO: position should have a deafult value OR should be optional
    constructor(src:string, positition: Position) {
        this.imageEl = new window.Image()
        this.image.src = src


        this.image.onload = (...args) => {
        this.position = {...positition, height: this.image.height, width: this.image.width}
        this.onLoadHandlers.forEach(function(handler){
            handler(...args)
        })

        }
        this.position = {...positition, height: this.image.height, width: this.image.width}

    }

    get image(){
        return this.imageEl
    }

    set onload(handler : OnLoadHandler){
        this.onLoadHandlers.push(handler)
    }
}

export default CanvasImage
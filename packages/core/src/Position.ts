// responsible for positioning an object in the canvas
// using this canvas will draw image/sprite
// it stores - height, width, positionX, positionY

// TODO: need to re-strucuture

export default interface Position { 
    height: number;
    width: number;
    positionX: number;
    positionY: number;
    paddingX: number
    ratioedWidth?: number
}
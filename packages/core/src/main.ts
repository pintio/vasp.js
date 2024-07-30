import Canvas from "./Canvas"
import GameOptions from "./GameOptions"
import InfiniteSprite from "./InfiniteSprite"
import Platform from "./Platform"

// const bgImg = "https://img.freepik.com/free-vector/cartoon-computer-games-night-forest-landscape-plant-green-natural-environment-wood-grass_1284-41530.jpg?t=st=1722021465~exp=1722025065~hmac=de8b41a80074ea868b3f4079d39c398ee576cfa6b705704cf11521d704f7ec50&w=2000"
const bgImg = "https://img.itch.zone/aW1hZ2UvMTc4ODM2LzgzNzU3Mi5wbmc=/original/t0jyLw.png"

function main() {
  const app = document.getElementById("app")

  if(!app) return

  const gameOptions = GameOptions.get()

  gameOptions.speed = 12

  const canvas = createCanvas(app)

  const platform = Platform.getPlatform()
  platform.add("canvas", {height: 500, width:800, positionX: 0, positionY: 0, paddingX: 0})

  const canvasPosition = platform.get("canvas")

  if(canvasPosition){
    const bgSprite = new InfiniteSprite(bgImg, canvasPosition)
    setInterval(()=>{
      canvas.clear()
      canvas.drawImages(bgSprite.getSprites())
      bgSprite.move()

    },30)
  }
  
}

function createCanvas(app:HTMLElement){
  const canvas = Canvas.getCanvas()
  canvas.container = app

  canvas.height = 500
  canvas.width = 800

  return canvas
}

main()
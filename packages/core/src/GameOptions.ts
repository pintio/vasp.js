class GameOptions {
    private constructor() {   
    }

    public speed : number = 10

    private static instance: GameOptions

    public static get(){
        if(this.instance == undefined){
            this.instance = new GameOptions()
        }
        return this.instance
    }

}

export default GameOptions
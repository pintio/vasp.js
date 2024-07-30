import Position from "./Position"

class Platform {
    private constructor() {   
        this.dimensionMap = new Map()    
    }

    private static instance: Platform

    private dimensionMap : Map<string, Position>

    public static getPlatform(){
        if(!this.instance){
            this.instance = new Platform()
        }
        return this.instance
    }

    public add(key:string, position:Position){
        this.dimensionMap.set(key, position)
    }

    public get(key:string){
        return this.dimensionMap.get(key)
    }
}

export default Platform
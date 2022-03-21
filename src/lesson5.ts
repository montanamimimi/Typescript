export class MyGraphicsPrimitive2D {
    protected x: number
    protected y: number
    protected height: number
    protected width: number

    constructor(x:number, y:number, width:number, height:number) {
        this.x = x
        this.y = y
        this.height = height
        this.width = width
    }

    move(a:number, b:Number){
        this.x = this.x + a
        this.y = this.y + a
    }
} 

export class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    private _square: number;
    
    constructor (x: number,y: number, height: number, width: number) {
        super(x, y, height, width)
        this.calculateSquare()
    }

    calculateSquare(){
        this._square = this.height*this.width
    }

    getSquare(){
        return this._square
    }
}

export class MyCircle extends MyAreaPrimitive2D {
    private _center: number[]
    private _radius: number

    constructor(x: number,y: number, height: number, width: number){
        super(x, y, height, width)
        this.calculateCenter()
        this.calculateRadius()
    }

    calculateCenter() {
        this._center = [this.x, this.y]
    }

    calculateRadius() {
        this._radius = this.width
    }

    getCenter(){
        return this._center
    }

    getRadius(){
        return this._radius
    }
}


export class MyRectangle extends MyAreaPrimitive2D {
    private _leftBorder: number[]
    private _rightBorder: number[]

    constructor(x: number,y: number, height: number, width: number){
        super(x, y, height, width)
        this.calculateLeftBorder()
        this.calculateRightBorder()
    }

    calculateLeftBorder() {
        this._leftBorder = [this.x, this.y + this.height] 
    }

    calculateRightBorder() {
        this._rightBorder = [this.x + this.width, this.y]
    }

    getLeftBorder(){
        return this._leftBorder
    }

    getRightBorder(){
        return this._rightBorder
    }
}
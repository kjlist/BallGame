class Paddle{
    constructor(game){
        this.game = game
        log(this.game)
        this.img = imgFromPath('img/paddle.png')
        this.width = this.img.width
        this.height = this.img.height
        this.x =100
        this.y =200
        this.speed = 5
    }
    static new(...args){
        return new this(args)
    }
    moveLeft(){
        if (this.x > 0){
            this.x -= this.speed
        }
    }
    moveRight(){
        log(this.img)
        //目前获取不到width和height
        if (this.x < 400 - this.width){
            this.x += this.speed
        }
    }
    update(){
        // this.moveRight()
    }
    draw(){
        //打印不出来this.game.drawImage???暂时不调用每个item的draw方法,所以此时此刻也不需要game
        // log(this.game.elements)
        // log(this.game.drawImage(this))
        // this.game.drawImage(this)
    }
}
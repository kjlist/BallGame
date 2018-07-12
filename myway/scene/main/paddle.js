class Paddle{
    constructor(game){
        this.game = game
        // this.img = imgFromPath('img/paddle.png')
        this.texture = game.getImgFromName("paddle")
        this.width = this.texture.width
        this.height = this.texture.height
        this.x =100
        this.y =200
        this.speed = 5
    }
    static new(game){
        return new this(game)
    }
    moveLeft(){
        if (this.x > 0){
            this.x -= this.speed
        }
    }
    moveRight(){
        //目前获取不到width和height
        if (this.x < 400 - this.img.width){
            this.x += this.speed
        }
    }
    collide(ball) {
        // log('挡板位置',this.x,this.y)
        // log('球位置',ball.x,ball.y,ball.img.height)
        //目前获取不到width和height,有点问题,是因为异步的问题,加载图片需要时间
        if (ball.y + ball.img.height > this.y) {
            if (ball.x > this.x && ball.x < this.x + this.img.width) {
                log('相撞')
                return true
            }
        }
        return false
    }
    update(){
        // this.moveRight()
    }
    draw(){
        //打印不出来this.game.drawImage???暂时不调用每个item的draw方法,所以此时此刻也不需要game
        // log(this.game.elements)
        // log(this.game.drawImage(this))
        this.game.drawImage(this)
    }
}
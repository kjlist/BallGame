class Ball {
    constructor(game) {
        this.game = game
        this.img = this.game.getImgFromName("ball")
        this.width = this.img.width
        this.height = this.img.height
        this.x = 100
        this.y = 150
        this.fired = false
        this.speedX = 3
        this.speedY = 3
    }

    fire() {
        this.fired = true
    }

    static new(game){
        return new this(game)
    }

    move() {
        if (this.fired) {
            if (this.x < 0 || this.x > 400) {
                this.speedX = -this.speedX
            }
            if (this.y < 0 || this.y > 300) {
                this.speedY = -this.speedY
            }
            this.x += this.speedX
            this.y += this.speedY
        }
    }

    update() {
        // this.moveRight()
    }

    draw() {
        //打印不出来this.game.drawImage???暂时不调用每个item的draw方法,所以此时此刻也不需要game
        // log(this.game.elements)
        // log(this.game.drawImage(this))
        // this.game.drawImage(this)
    }
}
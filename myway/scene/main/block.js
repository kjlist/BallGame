class Block {
    constructor(args) {
        this.game = args[0]
        this.x = args[1][0] || 100
        this.y = args[1][1] || 100
        this.lives = args[1][2] || 1
        this.alive = true
        let postfix = '0' + this.lives
        this.img = this.game.getImgFromName("block" + postfix)
        this.width = this.img.width
        this.height = this.img.height
    }

    static new(...args) {
        return new this(args)
    }

    collide(b) {
        // log('block', o.alive, b)
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, o))
    }
    update() {

    }

    draw() {

    }
}
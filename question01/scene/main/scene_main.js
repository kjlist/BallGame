class SceneMain extends BaseScene {
    constructor(game) {
        super(game)
    }

    setup() {
        log('SceneMain初始化0',this.game.gameImage)
        this.paddle = Paddle.new(this.game)
        this.addElement(this.paddle)
        this.ball = Ball.new(this.game)
        this.addElement(this.ball)
        super.setup()
    }

    setupEvent() {
        super.setupEvent()
        var self = this
        this.game.registerAction('a', function () {
            self.paddle.moveLeft()
        })
        this.game.registerAction('d', function () {
            self.paddle.moveRight()
        })
        this.game.registerAction('q', function () {
            var s = SceneTitle.new(self.game)
            self.game.replaceScene(s)
        })
        this.game.registerAction('f', function () {
            self.ball.fire()
        })
    }

    update() {
        // super.update()
        //想把update托管到item里面,但是物体之间的交互怎么办?存着scene?
        if (this.paddle.collide(this.ball)) {
            this.ball.speedX = -this.ball.speedX
            this.ball.speedY = -this.ball.speedY
        }
        this.ball.move()
    }

    draw() {
        super.draw()
    }

}
class SceneMain extends BaseScene {
    constructor(game) {
        super(game)
    }

    setup() {
        this.loadLevel(2)
        this.paddle = Paddle.new(this.game)
        this.addElement(this.paddle)
        this.ball = Ball.new(this.game)
        this.addElement(this.ball)
        super.setup()
    }

    loadLevel(n) {
        n = n - 1
        var level = this.game.levels[n]
        this.blocks = []
        for (var i = 0; i < level.length; i++) {
            var p = level[i]
            var b = Block.new(this.game,p)
            this.blocks.push(b)
        }
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

        this.game.registerAction('1', function () {
            self.loadLevel(1)
        })
        this.game.registerAction('2', function () {
            self.loadLevel(2)
        })
        this.game.registerAction('3', function () {
            self.loadLevel(3)
        })
    }

    update() {
        // super.update()
        // for (var i = 0; i < this.blocks.length; i++) {
        //     if ()
        // }


        //想把update托管到item里面,但是物体之间的交互怎么办?存着scene?
        if (this.paddle.collide(this.ball)) {
            this.ball.speedX = -this.ball.speedX
            this.ball.speedY = -this.ball.speedY
        }
        this.ball.move()
    }

    draw() {
        super.draw()
        for (var i = 0; i < this.blocks.length; i++) {
            this.game.drawImage(this.blocks[i])
        }
    }

}
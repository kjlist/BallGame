class SceneMain extends BaseScene{
    constructor(game) {
        super(game)
    }

    setup() {
        this.paddle = Paddle.new(this.game)
        this.addElement(this.paddle)
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
    }

    update() {
        super.update()
    }

    draw() {
        super.draw()
    }

}
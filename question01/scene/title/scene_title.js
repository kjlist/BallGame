class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
    }

    setup() {
        this.paddle1 = Paddle.new(this.game)
        this.addElement(this.paddle1)
        this.paddle2 = Paddle.new(this.game)
        this.paddle2.x = 50
        this.paddle2.y = 200
        this.addElement(this.paddle2)
        super.setup()
    }

    setupEvent() {
        super.setupEvent()
    }

    update() {
        super.update()
    }

    draw() {
        super.draw()
    }

}
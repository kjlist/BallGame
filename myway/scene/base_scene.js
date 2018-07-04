class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.setup()
    }

    setup() {
        this.setupEvent()
    }

    setupEvent() {
    }

    update() {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].update()
        }
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            this.game.drawImage(this.elements[i])
        }
    }

    addElement(item) {
        this.elements.push(item)
    }

    static new(...args) {
        return new this(...args)
    }
}
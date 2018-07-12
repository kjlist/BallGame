// class GuaScene {
//     constructor(game) {
//         this.game = game
//         this.debugModeEnabled = true
//         this.elements = []
//     }
//     static new(game) {
//         var i = new this(game)
//         return i
//     }
//     addElement(img) {
//         img.scene = this
//         this.elements.push(img)
//     }
//     draw() {
//         for (var e of this.elements) {
//             e.draw()
//         }
//     }
//     update() {
//         if (this.debugModeEnabled) {
//             for (var i = 0; i < this.elements.length; i++) {
//                 var e = this.elements[i]
//                 e.debug && e.debug()
//             }
//         }
//         for (var i = 0; i < this.elements.length; i++) {
//             var e = this.elements[i]
//             e.update()
//         }
//     }
// }





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
    //上面两个函数是否是必要的,继承到后面的话很难知道这些代码

    update() {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].update()
        }
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            // this.game.drawImage(this.elements[i])
            this.elements[i].draw()
        }
    }

    addElement(item) {
        return this.elements.push(item)
    }

    static new(...args) {
        return new this(...args)
    }
}
//感觉自己抽象的base_scene并不好,需要再思考一下
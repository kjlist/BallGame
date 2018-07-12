class GuaGame {
    //作为控制类
    constructor(images, runCallback) {
        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = 400
        this.height = 300
        this.scene = null
        this.images = {}
        this.setup()

        var self = this
        var loads = []
        var names = Object.keys(images)
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = images[names[i]]
            let img = new Image()
            img.src = path
            img.onload = function () {
                self.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    //开始
                    log('self.images', self.images)
                    //初始化最开始的场景
                    self.setMainLoop(runCallback)
                }
            }
        }
        // 重中之重,这种循环中又有函数的,使用let
    }


    setup() {
        this.setInput()

        this.levels = [
            [
                [0, 0,],
            ],
            [
                [50, 0,],
                [100, 100,],
            ],
            [
                [50, 30,],
                [100, 100, 2],
                [200, 100, 2],
            ],
        ]
    }

    setInput() {
        this.keydowns = {}
        this.actions = {}
        //需要self接住this,或者使用箭头函数
        var self = this
        window.addEventListener('keydown', function (event) {
            self.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    updateInput() {
        var self = this
        var actions = Object.keys(self.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (self.keydowns[key]) {
                self.actions[key]()
            }
        }
    }


    getImgFromName(name) {
        return this.images[name]
    }
    //命名方式可以这样
    textureByName(name){
        return this.images[name]
    }

    setMainLoop(runCallback) {
        runCallback(this)
        var self = this
        setTimeout(function () {
            self.runloop()
        }, 1000 / window.fps)
    }

    runloop() {
        var self = this
        // update
        self.updateInput()
        self.update()
        // clear
        self.context.clearRect(0, 0, self.width, self.height)
        // draw
        self.draw()
        setTimeout(function () {
            self.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        //以后做的大了,旧的场景需要销毁
        this.scene = scene
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    drawImage(image) {
        this.context.drawImage(image.texture, image.x, image.y)
    }

    static new(...args) {
        return new this(...args)
    }

    //函数的先后排序是否也需要有规范,构造类的在最上面,功能性的放在下面

}
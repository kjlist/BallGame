// class GuaGame{
//     //作为控制类
//     constructor(){
//         this.canvas = e('#id-canvas')
//         this.context = this.canvas.getContext('2d')
//         this.width = 400
//         this.height = 300
//         this.elements = []
//         this.setup()
//     }
//     setup(){
//         this.setUpInput()
//         //此类方法
//         var self = this
//         setInterval(function(){
//             // events
//             var actions = Object.keys(self.actions)
//             for (var i = 0; i < actions.length; i++) {
//                 var key = actions[i]
//                 if(self.keydowns[key]) {
//                     // 如果按键被按下, 调用注册的 action
//                     self.actions[key]()
//                 }
//             }
//             // update
//             self.update()
//             // clear
//             self.context.clearRect(0, 0, self.width, self.height)
//             // draw
//             self.draw()
//         }, 1000/30)
//     }
//     setUpInput(){
//         this.keydowns = {}
//         this.actions = {}
//         //需要self接住this,或者使用箭头函数
//         var self = this
//         window.addEventListener('keydown', function(event){
//             self.keydowns[event.key] = true
//         })
//         window.addEventListener('keyup', function(event){
//             self.keydowns[event.key] = false
//         })
//     }
//     registerAction(key,callback){
//         this.actions[key] = callback
//     }
//     addElement(item){
//         this.elements.push(item)
//     }
//     update(){
//         for (var i = 0;i < this.elements.length;i++){
//             this.elements[i].update()
//         }
//     }
//     draw(){
//         // this.context.clearRect(0,0,1000,1000)
//         for (var i = 0;i < this.elements.length;i++){
//             // this.elements[i].draw()
//             this.drawImage(this.elements[i])
//         }
//     }
//     drawImage(image){
//         this.context.drawImage(image.img,image.x,image.y)
//     }
//
//     static new(...args) {
//         return new this(...args)
//     }
//
// }


class GuaGame {
    //作为控制类
    constructor(gameImage) {
        this.gameImage = gameImage
        log('初始化GuaGame1',this.gameImage)
        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = 400
        this.height = 300
        this.scene = null
        this.setup()
    }

    setup() {
        this.setInput()
        this.setMainLoop()
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


     getImgFromName(name){
         log('getImgFromName',this.gameImage)
        return this.gameImage[name]
    }
    setMainLoop() {
        // setInterval(function () {
        //     // update
        //     self.updateInput()
        //     self.update()
        //     // clear
        //     self.context.clearRect(0, 0, self.width, self.height)
        //     // draw
        //     self.draw()
        // }, 1000 / 30)
        //用setTimeout代替setInterval
        var self = this
        setTimeout(function () {
            var s = SceneMain.new(self)
            self.replaceScene(s)
            //最好剥离出gua_game,做成一个runCallback
            self.runloop()
        },1000 / window.fps)
    }
    runloop(){
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
        },1000 / window.fps)
    }
    replaceScene(scene) {
        //旧的场景需要销毁
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
        this.context.drawImage(image.img, image.x, image.y)
    }

    static new(...args) {
        return new this(...args)
    }

}
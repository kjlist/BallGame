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
    constructor() {
        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = 400
        this.height = 300
        this.scene = null
        this.setup()
    }

    setup() {
        this.setInput()
        this.setLoop()
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

    setLoop() {
        var self = this
        setInterval(function () {
            // update
            self.updateInput()
            self.update()
            // clear
            self.context.clearRect(0, 0, self.width, self.height)
            // draw
            self.draw()
        }, 1000 / 30)
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
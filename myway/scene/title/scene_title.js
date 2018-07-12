// class SceneTitle extends GuaScene {
//     constructor(game) {
//         super(game)
//         // var label = GuaLabel.new(game, 'hello from gua')
//         // this.addElement(label)
//
//         // cave bg
//         var bg = GuaImage.new(game, 'bg')
//         this.addElement(bg)
//         //加入水管
//         this.pipes = Pipes.new(game)
//         this.addElement(this.pipes)
//
//         // 循环移动的地面
//         this.grounds = []
//         for (var i = 0; i < 30; i++) {
//             var g = GuaImage.new(game, 'ground')
//             g.x = i * 19
//             g.y = 450
//             this.addElement(g)
//             this.grounds.push(g)
//         }
//         this.skipCount = 5
//         // bird
//         var b = GuaAnimation.new(game)
//         b.x = 100
//         b.y = 150
//         this.bird = b
//         this.addElement(b)
//         this.setupInputs()
//     }
//
//     update() {
//         super.update()
//         // 地面移动
//         this.skipCount--
//         var offset = -5
//         if (this.skipCount == 0) {
//             this.skipCount = 4
//             offset = 15
//         }
//         for (var i = 0; i < 30; i++) {
//             var g = this.grounds[i]
//             g.x += offset
//         }
//         //判断是否相撞,放在bird中
//         for (var i = 0;i< this.pipes.pipes.length;i++){
//             var p= this.pipes.pipes[i]
//             if (p.flag == 1){
//                 if (this.bird.x < p.x+p.w && this.bird.x >p.x){
//                     if(this.bird.y > p.y){
//                         log("死了")
//                     }
//                 }
//             }
//             else {
//                 if (this.bird.x < p.x+p.w && this.bird.x >p.x){
//                     if(this.bird.y < p.y + p.h){
//                         log("死了")
//                     }
//                 }
//             }
//         }
//     }
//
//     setupInputs() {
//         var self = this
//         var b = this.bird
//         self.game.registerAction('a', function (keyStatus) {
//             b.move(-2, keyStatus)
//         })
//         self.game.registerAction('d', function (keyStatus) {
//             b.move(2, keyStatus)
//         })
//         self.game.registerAction('j', function (keyStatus) {
//             console.log('b.y, ', b.y);
//             b.jump()
//         })
//     }
// }

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
    }

    setup() {
        this.paddle = Paddle.new(this.game)
        this.addElement(this.paddle)
        this.ps = GuaParticleSystem.new(this.game,'chip')
        this.ps.index = this.addElement(this.ps)
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
        this.game.context.fillText("标题界面",100,190)
        //将这个也抽象成一个Label类
    }

}
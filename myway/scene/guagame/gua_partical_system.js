// class GuaParticle extends GuaImage {
//     constructor(game) {
//         super(game, 'fire')
//         this.setup()
//     }
//     setup() {
//         this.life = 20
//     }
//     init(x, y, vx, vy) {
//         this.x = x
//         this.y = y
//         this.vx = vx
//         this.vy = vy
//     }
//     update() {
//         this.life--
//         this.x += this.vx
//         this.y += this.vy
//         var factor = 0.01
//         this.vx += factor * this.vx
//         this.vy += factor * this.vy
//     }
// }
//
// class GuaParticleSystem {
//     constructor(game) {
//         this.game = game
//         this.setup()
//     }
//     static new(game) {
//         return new this(game)
//     }
//     setup() {
//         this.duration = 50
//         this.x = 150
//         this.y = 200
//         this.numberOfParticles = 50
//         this.particles = []
//     }
//     update() {
//         this.duration--
//         // 元素的draw是通过gua_scene中的addElement生成的，只要从该数组中删除掉即可
//         if (this.duration < 0) {
//
//         }
//         //添加小火花
//         if (this.particles.length < this.numberOfParticles) {
//             var p = GuaParticle.new(this.game)
//             var s = 2
//             var vx = randomBetween(-s, s)
//             var vy = randomBetween(-s, s)
//             p.init(this.x, this.y, vx, vy)
//             this.particles.push(p)
//         }
//         //更新所有的小火花
//         for (var p of this.particles) {
//             p.update()
//         }
//         // 删除死掉的小火花
//         this.particles = this.particles.filter(p => p.life > 0)
//     }
//     draw() {
//         if (this.duration < 0) {
//             // TODO,这是临时方案
//             //应该从scene中删除自己才对
//             return
//         }
//         for (var p of this.particles) {
//             p.draw()
//         }
//     }
// }




class GuaParticle extends GuaImage {
    constructor(game,name) {
        super(game, name)
        this.setup()
    }
    setup() {
        this.life = 20
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        var factor = 0.01
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
    //init用于外部初始化,setup用于内部初始化
}
class GuaParticleSystem{
    constructor(game,name){
        this.game = game
        this.name = name
        this.setup()
    }
    static new(game,name){
        return new this(game,name)
    }
    setup(){
        this.duration = 30
        this.x = 150
        this.y = 200
        this.numOfParticles = 50
        this.particles = []
    }
    update(){
        this.duration--
        // 元素的draw是通过gua_scene中的addElement生成的，只要从该数组中删除掉即可
        //filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
        // splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容
        if (this.duration < 0) {
            //remove自己,参考一下cocos怎么做的
            //存储在Vector<Node*> _children;        ///< array of children nodes
            //用迭代器找到index,然后通过index删除掉
            //设想给每一个元素加一个tag?,如果同时有多个一样的?hash找每一个?
            this.removeMyself()
            //设置一个removeMyself函数吧
            return
        }
        //添加chips
        if(this.particles.length < this.numOfParticles){
            var p = GuaParticle.new(this.game,this.name)
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        //更新chips
        for (var p of this.particles){
            p.update()
        }
        // 删除死掉的小火花
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw(){
        // if (this.duration < 0) {
        //     // TODO,这是临时方案
        //     //应该从scene中删除自己才对
        //     return
        // }
        for (var p of this.particles) {
            p.draw()
        }
    }
    removeMyself(){
        var index = getIndex(this,this.game.scene.elements)
        log(this.game.scene.elements,index)
        if (index != -1){
            this.game.scene.elements.splice(index,1)
        }
        log(this.game.scene.elements)
    }
}
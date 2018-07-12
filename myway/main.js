//下一步写一下debug模式和配置文件的自动化
var _main = function () {
    window.fps = 30
    var imageNamePath = {
        paddle: 'img/paddle.png',
        ball: 'img/ball.png',
        chip:'img/chip.jpg'
        // block:'img/block.png',
    }


    //现在有block三个,全部添加进去,这种加载的方式可以自动化
    let blocks = {
        name: 'block',
        numberOfImage: 3,
        path: 'img/block{seq}.png',
    }
    for (let i = 1; i <= blocks.numberOfImage; i++) {
        let postfix = '0' + i
        let name = blocks.name + postfix
        let path = blocks.path.replace('{seq}', postfix)
        log('name', name)
        log('path', path)
        imageNamePath[name] = path
    }

    


    var g = GuaGame.new(imageNamePath, function (g) {
        var s = SceneTitle.new(g)
        g.replaceScene(s)
    })
}
_main()
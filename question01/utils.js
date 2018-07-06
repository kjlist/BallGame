var imgFromPath = function(path){
    var img = new Image()
    img.src = path
    return img
}

// var imgFromName = function(game,name){
//     log('imgFromName0',game,name)
//     log('imgFromName11',game.height)
//     return game.gameImage[name]
// }


const e = sel => document.querySelector(sel)
const log = console.log.bind(console)
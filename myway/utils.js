var imgFromPath = function(path){
    var img = new Image()
    img.src = path
    return img
}
const e = sel => document.querySelector(sel)
const log = console.log.bind(console)
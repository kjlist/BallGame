var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.img.height) {
        if (b.x > o.x && b.x < o.x + o.img.width) {
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
const getIndex = function (target,array) {
    for (var i = 0 ; i<array.length;i++ ){
        if (array[i] === target){
            return i
        }
    }
    return -1
}
const e = sel => document.querySelector(sel)
const log = console.log.bind(console)
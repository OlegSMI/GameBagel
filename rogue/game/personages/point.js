import randomNumber from '../services/random.js'

export default class Point {
    constructor(sizeMap, mapArray) {
        this.x
        this.y
        this.map = {
            sizes: sizeMap,
            array: mapArray,
        }
    }

    create() {
        this.x = randomNumber(0, this.map.sizes.width)
        this.y = randomNumber(0, this.map.sizes.height)
        if (this.checkWallBlock(this.x, this.y)) {
            this.create()
        }
    }

    checkWallBlock(x, y) {
        return this.map.array[y][x].classList.contains('tileW')
    }

    removePoint(y, x) {
        var node = this.map.array[y][x]
        this.removeClasses(node.classList)
        this.removeChildrens(node)
    }

    removeClasses(classList) {
        while (classList.length > 0) {
            classList.remove(classList.item(0))
        }
        classList.add('tile')
    }

    removeChildrens(myNode) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild)
        }
    }
}

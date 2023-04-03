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

    remove() {}
}

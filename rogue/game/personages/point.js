import randomNumber from '../services/random.js'

export default class Point {
    constructor() {
        this.x
        this.y
    }

    getCoords() {
        return { x: this.x, y: this.y }
    }

    setCoords(_X, _Y) {
        this.x = _X
        this.y = _Y
    }

    create(mapSize, mapArray) {
        this.x = randomNumber(0, mapSize.width)
        this.y = randomNumber(0, mapSize.height)
        if (this.checkWallBlock(mapArray)) {
            this.create(mapSize, mapArray)
        }
    }

    checkWallBlock(mapArray) {
        return mapArray[this.y][this.x].classList.contains('tileW')
    }
}

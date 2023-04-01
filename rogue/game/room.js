import Rectangle from './rectangle.js'

export default class Room extends Rectangle {
    constructor(...args) {
        super(...args)
    }

    createRoom(mapArray) {
        for (var blockY = 0; blockY < this.sideLengths.height; blockY++) {
            for (var blockX = 0; blockX < this.sideLengths.width; blockX++) {
                mapArray[this.position.indentY + blockY][
                    this.position.indentX + blockX
                ].classList.remove('tileW')
            }
        }
    }
}

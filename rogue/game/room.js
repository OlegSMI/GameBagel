import Rectangle from './rectangle.js'

export default class Room extends Rectangle {
    constructor(...args) {
        super(...args)
        this.activatorSizes = args[0]
    }

    createRoom(mapArray) {
        this.createRectangle(this.activatorSizes)
        if (!this.placementRoom(mapArray)) {
            try {
                this.createRoom(mapArray)
            } catch (e) {
                console.log('Recursion: ', e)
            }
        }
        for (var blockY = 0; blockY < this.sideLengths.height; blockY++) {
            for (var blockX = 0; blockX < this.sideLengths.width; blockX++) {
                mapArray[this.position.indentY + blockY][
                    this.position.indentX + blockX
                ].classList.remove('tileW')
            }
        }
    }

    placementRoom(mapArray) {
        for (var i = this.scope.fromX; i <= this.scope.toX; i++) {
            for (var j = this.scope.fromY; j <= this.scope.toY; j++) {
                if (!mapArray[j][i].classList.contains('tileW')) {
                    return false
                }
            }
        }
        return true
    }
}

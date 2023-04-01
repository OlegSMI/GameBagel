import randomNumber from './services/random.js'

export default class Rectangle {
    constructor(mapSizes) {
        this.sideLengths = {}
        this.position = {}
        this.scope = {}
        this.createRectangle(mapSizes)
    }

    createSideLengths() {
        this.sideLengths = {
            width: randomNumber(3, 9),
            height: randomNumber(3, 9),
        }
    }

    createPosition(mapSizes) {
        this.position = {
            indentX: randomNumber(0, mapSizes.width - this.sideLengths.width),
            indentY: randomNumber(0, mapSizes.height - this.sideLengths.height),
        }
    }

    createScope(mapSizes) {
        let x = this.position.indentX
        let y = this.position.indentY
        let dx = x + this.sideLengths.width
        let dy = y + this.sideLengths.height

        this.scope.fromX = x > 0 ? x - 1 : x
        this.scope.fromY = y > 0 ? y - 1 : y
        this.scope.toX = dx < mapSizes ? dx + 1 : dx
        this.scope.toY = dy < mapSizes ? dy + 1 : dy
    }

    createRectangle(mapSizes) {
        this.createSideLengths()
        this.createPosition(mapSizes)
        this.createScope(mapSizes)
    }
}

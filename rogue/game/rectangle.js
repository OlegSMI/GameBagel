import randomNumber from './services/random.js'

export default class Rectangle {
    constructor(mapSizes) {
        this.sideLengths = {
            width: randomNumber(3, 9),
            height: randomNumber(3, 9),
        }

        this.position = {
            indentX: randomNumber(0, mapSizes.width - this.sideLengths.width),
            indentY: randomNumber(0, mapSizes.height - this.sideLengths.height),
        }
    }
}

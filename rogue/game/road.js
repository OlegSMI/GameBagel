import randomNumber from './services/random.js'

export default class Road {
    constructor() {
        this.isHorizontal = false
        this.firstPoint = {}
    }

    createFirstPoint(mapSizes) {
        this.firstPoint = this.isHorizontal
            ? { x: 0, y: randomNumber(0, mapSizes.height) }
            : { x: randomNumber(0, mapSizes.width), y: 0 }
    }

    createRoad(mapSizes, mapArray, value) {
        this.isHorizontal = value
        this.isHorizontal
            ? this.createHorizontalRoad(mapSizes, mapArray)
            : this.createVerticalRoad(mapSizes, mapArray)
    }

    createHorizontalRoad(mapSizes, mapArray) {
        this.createFirstPoint(mapSizes)
        for (var line = 0; line < mapSizes.width; line++) {
            mapArray[this.firstPoint.y][
                this.firstPoint.x + line
            ].classList.remove('tileW')
        }
    }

    createVerticalRoad(mapSizes, mapArray) {
        this.createFirstPoint(mapSizes)
        for (var line = 0; line < mapSizes.height; line++) {
            mapArray[this.firstPoint.y + line][
                this.firstPoint.x
            ].classList.remove('tileW')
        }
    }

    // createDecorator(f) {
    //     console.log(arguments)
    //     this.createFirstPoint(arguments)
    //     return function () {
    //         return f.apply(this, arguments)
    //     }
    // }
}

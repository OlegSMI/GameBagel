import randomNumber from '../services/random.js'

export default class Road {
    constructor() {
        this.isHorizontal = false
        this.firstPoint = {}
        this.scope = {}
    }

    createFirstPoint(mapSizes) {
        this.firstPoint = this.isHorizontal
            ? { x: 0, y: randomNumber(0, mapSizes.height) }
            : { x: randomNumber(0, mapSizes.width), y: 0 }

        this.createScope(mapSizes)
    }

    createScope(mapSizes) {
        let x = this.firstPoint.x
        let y = this.firstPoint.y

        if (this.isHorizontal) {
            this.scope.fromY = y > 0 ? y - 1 : y
            this.scope.toY = y < mapSizes.height ? y + 1 : y
        } else {
            this.scope.fromX = x > 0 ? x - 1 : x
            this.scope.toX = x < mapSizes.width ? x + 1 : x
        }
    }

    createRoad(mapSizes, mapArray, value) {
        this.isHorizontal = value
        this.isHorizontal
            ? this.createHorizontalRoad(mapSizes, mapArray)
            : this.createVerticalRoad(mapSizes, mapArray)
    }

    createHorizontalRoad(mapSizes, mapArray) {
        this.createFirstPoint(mapSizes)
        // if (this.placementRoadHorizontal(mapArray))
        //     this.createHorizontalRoad(mapSizes, mapArray)
        for (var line = 0; line < mapSizes.width; line++) {
            mapArray[this.firstPoint.y][
                this.firstPoint.x + line
            ].classList.remove('tileW')

            mapArray[this.firstPoint.y][this.firstPoint.x + line].classList.add(
                'road'
            )
        }
    }

    createVerticalRoad(mapSizes, mapArray) {
        this.createFirstPoint(mapSizes)
        // if (this.placementRoadVertical(mapArray))
        //     this.createVerticalRoad(mapSizes, mapArray)
        for (var line = 0; line < mapSizes.height; line++) {
            mapArray[this.firstPoint.y + line][
                this.firstPoint.x
            ].classList.remove('tileW')
            mapArray[this.firstPoint.y + line][this.firstPoint.x].classList.add(
                'road'
            )
        }
    }

    // placementRoadVertical(mapArray) {
    //     for (var i = this.scope.fromX; i <= this.scope.toX; i++) {
    //         if (!mapArray[this.firstPoint.y][i].classList.contains('road')) {
    //             return false
    //         }
    //     }
    //     return true
    // }

    // placementRoadHorizontal(mapArray) {
    //     for (var i = this.scope.fromY; i <= this.scope.toY; i++) {
    //         if (!mapArray[i][this.firstPoint.x].classList.contains('road')) {
    //             return false
    //         }
    //     }
    //     return true
    // }

    // createDecorator(f) {
    //     console.log(arguments)
    //     this.createFirstPoint(arguments)
    //     return function () {
    //         return f.apply(this, arguments)
    //     }
    // }
}

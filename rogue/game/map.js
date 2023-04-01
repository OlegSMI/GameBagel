import Wall from './wall.js'
import Room from './room.js'
import randomNumber from './services/random.js'

export default class Map {
    constructor() {
        this.MAP = []
    }

    createBackgroundFill() {
        for (var i = 0; i < this.getMapSize().height; i++) {
            var line = new Array()
            for (var j = 0; j < this.getMapSize().width; j++) {
                var wall = new Wall()
                line.push(wall.create())
            }
            this.MAP.push(line)
        }
    }

    createMap() {
        this.createBackgroundFill()
        this.createRooms()
        this.createRoads()
    }

    createRooms() {
        var quantityRooms = randomNumber(5, 11)
        var quantityRooms = 2
        for (var i = 0; i < quantityRooms; i++) {
            var room = new Room(this.getMapSize())
            room.createRoom(this.MAP)
        }
    }

    createRoads() {
        console.log('roads')
    }

    getMapSize() {
        var sizeHeight = new Wall().parent.clientHeight / 50
        var sizeWidth = new Wall().parent.clientWidth / 50
        return { height: sizeHeight, width: sizeWidth }
    }
}

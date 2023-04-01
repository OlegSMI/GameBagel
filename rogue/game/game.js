import Map from './map.js'

class Game {
    constructor() {
        this.map = new Map()
        // this.Hero = new Hero()
        // this.enemys = new Enemys()
    }

    init() {
        this.map.createMap()
    }
}

var game = new Game()
game.init()

// // personages classes
// class Personage extends Point {}

// class Hero extends Personage {}

// class Enemy extends Personage {}

// class Enemys extends Enemy {}

// // artifacts classes
// class Artifact extends Point {}

// class Artifacts extends Artifact {}

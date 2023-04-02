import Map from './map/map.js'
import Hero from './personages/hero.js'
import Enemy from './personages/enemy.js'

class Game {
    constructor() {
        this.map = new Map()
        this.hero = new Hero()
    }

    init() {
        this.map.createMap()
        this.hero.createHero(this.map.getMapSize(), this.map.MAP)
        this.hero.movementLeft(this.map.MAP)
        for (var i = 0; i < 10; i++) {
            var enemy = new Enemy()
            enemy.createHero(this.map.getMapSize(), this.map.MAP)
        }
    }
}

var game = new Game()
game.init()

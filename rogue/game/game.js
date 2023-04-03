import Map from './map/map.js'
import Hero from './personages/hero.js'
import Enemy from './personages/enemy.js'

class Game {
    constructor() {
        this.map = new Map()
        this.hero = new Hero(this.map.getMapSize(), this.map.MAP)
    }

    init() {
        this.map.createMap()
        this.hero.createHero()
        this.hero.movementHero()
        for (var i = 0; i < 10; i++) {
            var enemy = new Enemy(this.map.getMapSize(), this.map.MAP)
            enemy.createHero()
        }
    }
}

var game = new Game()
game.init()

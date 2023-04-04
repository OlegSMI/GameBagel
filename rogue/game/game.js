import Map from './map/map.js'
import Hero from './personages/hero.js'
import Enemy from './personages/enemy.js'
import Potion from './artifacts/potion.js'
import Sword from './artifacts/sword.js'

class Game {
    constructor() {
        this.map = new Map()
        this.hero = new Hero(this.map.getMapSize(), this.map.MAP)
    }

    init() {
        this.map.createMap()
        this.hero.createHero()
        this.hero.actionsHero()
        for (var i = 0; i < 10; i++) {
            var enemy = new Enemy(this.map.getMapSize(), this.map.MAP)
            enemy.createEnemy()
            var sword = new Sword(this.map.getMapSize(), this.map.MAP)
            sword.createSword()
        }
        for (var i = 0; i < 2; i++) {
            var potion = new Potion(this.map.getMapSize(), this.map.MAP)
            potion.createPotion()
        }
    }
}

var game = new Game()
game.init()

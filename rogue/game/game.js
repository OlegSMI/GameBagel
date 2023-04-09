import Map from './map/map.js'
import Hero from './personages/hero.js'
import Enemy from './personages/enemy.js'
import Potion from './artifacts/potion.js'
import Sword from './artifacts/sword.js'

class Game {
    constructor() {
        this.map = new Map()
        this.hero = new Hero(this.map.getMapSize(), this.map.MAP)
        this.enemys = []
    }

    init() {
        this.map.createMap()
        this.hero.createHero()

        this.hero.fighting(this.enemys)

        for (var i = 0; i < 1; i++) {
            var enemy = new Enemy(
                this.hero,
                this.map.getMapSize(),
                this.map.MAP
            )
            enemy.fighting(this.hero)
            enemy.createEnemy()
            this.enemys.push(enemy)
            var sword = new Sword(this.map.getMapSize(), this.map.MAP)
            sword.createSword()
        }
        for (var i = 0; i < 2; i++) {
            var potion = new Potion(this.map.getMapSize(), this.map.MAP)
            potion.createPotion()
        }

        // while (true) {
        //     new Promise((resolve) => setTimeout(resolve, 1000))
        //     let e = new Promise((resolve) => {
        //         console.log(this.enemys.length)
        //     })
        // }
    }
}

var game = new Game()
game.init()

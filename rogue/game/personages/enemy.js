import Personage from './personage.js'
import createPathToHero from '../services/finderPath.js'

export default class Enemy extends Personage {
    constructor(hero, ...args) {
        super(...args)
        this.attack = 1
        this.target = hero
        this.path = []
    }

    createEnemy() {
        this.createPersonage()
        this.drawEnemy()
        this.actionEnemy()
    }

    drawEnemy() {
        this.map.array[this.y][this.x].classList.add('tileE')
    }

    moveEnemy() {
        if (this.action) return
        console.log(this.path)
        var { x, y } = this.path.pop()
        if (x == this.target.x && y == this.target.y) return
        if (this.map.array[y][x].classList.contains('tileE')) return
        this.killPersonage('tileE')
        this.x = x
        this.y = y
        this.move2Personage(x, y, 'tileE')
        if (this.map.array[this.y][this.x].classList.contains('tileHP')) {
            this.map.array[this.y][this.x].classList.remove('tileHP')
        }
        if (this.map.array[this.y][this.x].classList.contains('tileSW')) {
            this.map.array[this.y][this.x].classList.remove('tileSW')
        }
        this.drawEnemy()
    }

    checkKey(obj, value) {
        return Object.keys(obj).find((key) => obj[key] === value)
    }

    async actionEnemy() {
        this.action = false
        while (!this.action) {
            await new Promise(() =>
                setInterval(() => {
                    this.path = []
                    this.path = createPathToHero(
                        this.x,
                        this.y,
                        this.target.x,
                        this.target.y,
                        this.checkWallBlock,
                        this.map,
                        this.path
                    )
                    this.moveEnemy()
                }, 1000)
            )
        }
    }

    async fighting() {
        let action = false
        while (!action) {
            await new Promise(() =>
                setInterval(() => {
                    this.attackEnemy(this.target)
                }, 400)
            )
        }
    }

    attackEnemy(hero) {
        if (this.action) return
        if (this.checkCoords(hero)) {
            hero.reducedHealth(this.attack)
            if (hero.health < 0) {
                alert('Sorry, you lose...')
            }
        }
    }

    killEnemy() {
        for (var key in this) {
            delete this[key]
        }
        this.action = true
    }

    checkArtifact() {
        var arr = this.map.array[this.y][this.x].classList
        if (arr.contains('tileHP')) {
            this.setHealth()
            arr.remove('tileHP')
        }
        if (arr.contains('tileSW')) {
            this.setAttack()
            arr.remove('tileSW')
        }
    }
}

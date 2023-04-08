import Personage from './personage.js'

export default class Hero extends Personage {
    constructor(...args) {
        super(...args)
        this.attack = 1
    }

    createEnemy() {
        this.createPersonage()
        this.drawEnemy()
    }

    drawEnemy() {
        this.map.array[this.y][this.x].classList.add('tileE')
    }

    async moveEnemy() {
        var arr = this.map.array[this.y][this.x].classList
        if (arr.contains('tileW') || arr.contains('tileE')) {
            this.x += diffX
            this.y += diffY
            return
        }
        this.movePersonage(diffX, diffY, 'tileP')
        this.drawHero()
    }

    async actionEnemy() {
        let action = false
        while (!action) {
            await new Promise(() =>
                setInterval(() => {
                    this.moveEnemy()
                }, 1000)
            )
        }
    }

    async fighting(hero) {
        let action = false
        while (!action) {
            await new Promise(() =>
                setInterval(() => {
                    this.attackEnemy(hero)
                }, 400)
            )
        }
    }

    attackEnemy(hero) {
        if (this.health <= 0) return
        if (this.checkCoords(hero)) {
            hero.reducedHealth(this.attack)
            if (hero.health < 0) {
                alert('Sorry, you lose')
            }
        }
    }
}

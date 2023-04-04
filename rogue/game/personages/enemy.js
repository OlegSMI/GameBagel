import Personage from './personage.js'

export default class Hero extends Personage {
    constructor(...args) {
        super(...args)
    }

    createEnemy() {
        this.createPersonage()
        this.drawEnemy()
    }

    drawEnemy() {
        this.map.array[this.y][this.x].classList.add('tileE')
        this.health = 5
        this.attack = 1
    }

    reducedHealth(attack) {
        this.health -= attack
        this.map.array[this.y][this.x].querySelector('.health').style.width =
            this.health / 5 + '%'
    }
}

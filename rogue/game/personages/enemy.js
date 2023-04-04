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
}

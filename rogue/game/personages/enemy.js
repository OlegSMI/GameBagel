import Personage from './personage.js'

export default class Hero extends Personage {
    constructor(...args) {
        super(...args)
    }

    createHero() {
        this.createPersonage()
        this.map.array[this.y][this.x].classList.add('tileE')
    }
}

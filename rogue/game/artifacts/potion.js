import Artifact from './artifact.js'

export default class Potion extends Artifact {
    constructor(...args) {
        super(...args)
    }

    createPotion() {
        this.create()
        this.drawPotion()
    }

    drawPotion() {
        this.map.array[this.y][this.x].classList.add('tileHP')
    }
}

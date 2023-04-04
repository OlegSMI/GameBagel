import Artifact from './artifact.js'

export default class Sword extends Artifact {
    constructor(...args) {
        super(...args)
    }

    createSword() {
        this.create()
        this.drawSword()
    }

    drawSword() {
        this.map.array[this.y][this.x].classList.add('tileSW')
    }
}

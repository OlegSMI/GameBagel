import Point from './point.js'

export default class Wall extends Point {
    constructor(...args) {
        super(...args)
        this.wall = document.createElement('div')
        this.wall.classList.add('tile')
    }

    create() {
        this.wall.classList.add('tileW')
        this.parent.appendChild(this.wall)
        return this.wall
    }
}

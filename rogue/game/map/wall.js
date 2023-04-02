export default class Wall {
    constructor() {
        this.parent = document.querySelector('.field')
        this.wall = document.createElement('div')
        this.wall.classList.add('tile')
    }

    create() {
        this.wall.classList.add('tileW')
        this.parent.appendChild(this.wall)
        return this.wall
    }
}

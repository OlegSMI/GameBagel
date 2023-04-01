export default class Point {
    constructor() {
        this.parent = document.querySelector('.field')
        this.x
        this.y
    }

    getCoords() {
        return { x: this.x, y: this.y }
    }

    setCoords(_X, _Y) {
        this.x = _X
        this.y = _Y
    }

    create() {}
}

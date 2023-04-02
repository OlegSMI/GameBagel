import Point from './point.js'

export default class Hero extends Point {
    constructor(...args) {
        super(...args)
    }

    createHero(mapSize, mapArray) {
        this.create(mapSize, mapArray)
        mapArray[this.y][this.x].classList.add('tileE')
    }
}

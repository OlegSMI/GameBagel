import Point from './point.js'

export default class Personage extends Point {
    constructor(...args) {
        super(...args)
        this.health
        this.attack
        this.personage
    }

    createPersonage() {
        this.create()
        this.drawPersonage()
    }

    createHealth() {
        var health = document.createElement('div')
        health.classList.add('health')
        this.personage.appendChild(health)
    }

    movePersonage(diffX = 0, diffY = 0, className) {
        var arr = this.map.array[this.y + diffY][this.x + diffX]
        this.drawPersonage()
        arr.classList.remove('personage')
        arr.classList.remove(className)
        var child = arr.querySelector('.health')
        arr.removeChild(child)
    }

    drawPersonage() {
        this.map.array[this.y][this.x].classList.add('personage')
        this.personage = this.map.array[this.y][this.x]
        this.createHealth()
    }
}

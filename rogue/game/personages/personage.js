import Point from './point.js'

export default class Personage extends Point {
    constructor(...args) {
        super(...args)
        this.health = 5
        this.attack
    }

    createPersonage() {
        this.create()
        this.drawPersonage()
    }

    createHealth() {
        var health = document.createElement('div')
        health.classList.add('health')
        this.map.array[this.y][this.x].appendChild(health)
        this.map.array[this.y][this.x].querySelector('.health').style.width =
            (this.health / 5) * 100 + '%'
    }

    movePersonage(diffX = 0, diffY = 0, className) {
        var arr = this.map.array[this.y + diffY][this.x + diffX]
        this.drawPersonage()
        if ((diffX != diffY) != 0) {
            this.redrawPersonage(arr, className)
        }
    }

    move2Personage(X, Y, className) {
        // console.log(X, Y)
        var arr = this.map.array[Y][X]
        this.drawPersonage()
        // if ((X != Y) != 0) {
        //     this.redraw2Personage(arr, className)
        // }
    }

    drawPersonage() {
        this.map.array[this.y][this.x].classList.add('personage')
        this.createHealth()
    }

    redrawPersonage(arr) {
        this.removeClasses(arr.classList)
        this.removeChildrens(arr)
    }

    killPersonage(className) {
        var arr = this.map.array[this.y][this.x]
        arr.classList.remove('personage')
        arr.classList.remove(className)
        var child = arr.querySelector('.health')
        arr.removeChild(child)
    }

    checkCoords(element) {
        return (
            (Math.abs(element.x - this.x) == 1 && element.y == this.y) ||
            (Math.abs(element.y - this.y) == 1 && element.x == this.x)
        )
    }

    reducedHealth(attack) {
        this.health -= attack
        this.map.array[this.y][this.x].querySelector('.health').style.width =
            (this.health / 5) * 100 + '%'
    }
}

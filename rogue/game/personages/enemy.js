import Personage from './personage.js'
import createPathToHero from '../services/finderPath.js'

export default class Enemy extends Personage {
    constructor(hero, ...args) {
        super(...args)
        this.attack = 1
        this.target = hero
        this.path = []
    }

    createEnemy() {
        this.createPersonage()
        this.drawEnemy()
        this.actionEnemy()
    }

    drawEnemy() {
        this.map.array[this.y][this.x].classList.add('tileE')
    }

    moveEnemy() {
        if (this.action) return
        console.log(this.path)
        // var x = this.target.x
        // var y = this.target.y
        // // var { diffX, diffY } = this.moveToHero(x, y)
        // this.movePersonage(diffX, diffY, 'tileE')
        // this.drawEnemy()
    }

    // checkNeighbors() {
    //     var neigh = {}
    //     if (this.x - 1 >= 0 && !this.checkWallBlock(this.x - 1, this.y))
    //         neigh.left = this.x - 1
    //     if (
    //         this.x + 1 <= this.map.sizes.width &&
    //         !this.checkWallBlock(this.x + 1, this.y)
    //     )
    //         neigh.right = this.x + 1
    //     if (this.y - 1 >= 0 && !this.checkWallBlock(this.x, this.y - 1))
    //         neigh.top = this.y - 1
    //     if (
    //         this.y + 1 <= this.map.sizes.height &&
    //         !this.checkWallBlock(this.x, this.y + 1)
    //     )
    //         neigh.bottom = this.y + 1
    //     return neigh
    // }

    // checkSmallestRange(x, y, obj) {
    //     Object.keys(obj).map((key) => {
    //         if (key === 'left' || key === 'right')
    //             obj[key] = Math.abs(obj[key] - x)
    //         if (key == 'top' || key == 'bottom')
    //             obj[key] = Math.abs(obj[key] - y)
    //     })
    //     return obj
    // }

    // moveToHero(x, y) {
    //     var minMove
    //     var diffX = 0
    //     var diffY = 0
    //     var { left, right, top, bottom } = this.checkNeighbors()

    //     if (
    //         (Math.abs(left - x) != 1 && Math.abs(top - y) != 0) ||
    //         (Math.abs(left - x) != 0 && Math.abs(top - y) != 1)
    //     ) {
    //         console.log('enemy: ', this.checkNeighbors(), 'and hero: ', x, y)
    //         var ranges = this.checkSmallestRange(x, y, this.checkNeighbors())
    //         console.log(ranges)
    //         minMove = Math.min(...Object.values(ranges))
    //         var position = this.checkKey(ranges, minMove)
    //         switch (position) {
    //             case 'top':
    //                 this.y -= 1
    //                 diffY = 1
    //                 break
    //             case 'bottom':
    //                 this.y += 1
    //                 diffY = -1
    //                 break
    //             case 'left':
    //                 this.x -= 1
    //                 diffX += 1
    //                 break
    //             case 'right':
    //                 this.x += 1
    //                 diffX -= 1
    //                 break
    //         }
    //     }
    //     return { diffX, diffY }
    // }

    checkKey(obj, value) {
        return Object.keys(obj).find((key) => obj[key] === value)
    }

    async actionEnemy() {
        this.action = false
        while (!this.action) {
            await new Promise(() =>
                setInterval(() => {
                    this.path = []
                    this.path = createPathToHero(
                        this.x,
                        this.y,
                        this.target.x,
                        this.target.y,
                        this.checkWallBlock,
                        this.map,
                        this.path
                    )
                    this.moveEnemy()
                }, 1000)
            )
        }
    }

    async fighting() {
        let action = false
        while (!action) {
            await new Promise(() =>
                setInterval(() => {
                    this.attackEnemy(this.target)
                }, 400)
            )
        }
    }

    attackEnemy(hero) {
        if (this.action) return
        if (this.checkCoords(hero)) {
            hero.reducedHealth(this.attack)
            if (hero.health < 0) {
                alert('Sorry, you lose...')
            }
        }
    }

    killEnemy() {
        for (var key in this) {
            delete this[key]
        }
        this.action = true
    }

    checkArtifact() {
        var arr = this.map.array[this.y][this.x].classList
        if (arr.contains('tileHP')) {
            this.setHealth()
            arr.remove('tileHP')
        }
        if (arr.contains('tileSW')) {
            this.setAttack()
            arr.remove('tileSW')
        }
    }
}

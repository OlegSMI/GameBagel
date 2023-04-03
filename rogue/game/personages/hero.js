import Personage from './personage.js'

export default class Hero extends Personage {
    constructor(...args) {
        super(...args)
    }

    createHero() {
        this.createPersonage()
        this.drawHero()
        // this.movementHero()
    }

    moveHero(diffX, diffY) {
        if (this.map.array[this.y][this.x].classList.contains('tileW')) {
            this.x += diffX
            this.y += diffY
            return
        }
        this.movePersonage(diffX, diffY, 'tileP')
        this.drawHero()
    }

    async movementHero() {
        let action = false
        while (!action) {
            await new Promise((resolve) => setTimeout(resolve, 100))
            let e = await new Promise((resolve) => {
                window.addEventListener('keydown', resolve)
            })
            this.handleKey(e)
        }
    }

    handleKey(e) {
        if (e.key == 'd') {
            this.x += 1
            this.checkScope()
            this.moveHero(-1, 0)
        } else if (e.key == 'w') {
            this.y -= 1
            this.checkScope()
            this.moveHero(0, 1)
        } else if (e.key == 'a') {
            this.x -= 1
            this.checkScope()
            this.moveHero(1, 0)
        } else if (e.key == 's') {
            this.y += 1
            this.checkScope()
            this.moveHero(0, -1)
        }
    }

    drawHero() {
        this.map.array[this.y][this.x].classList.add('tileP')
        this.health = 5
    }

    checkScope() {
        if (this.x < 0) this.x += 1
        if (this.y < 0) this.y += 1
        if (this.x > this.map.sizes.width) this.x -= 1
        if (this.y > this.map.sizes.height) this.y -= 1
    }
}

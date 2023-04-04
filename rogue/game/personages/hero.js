import Personage from './personage.js'

export default class Hero extends Personage {
    constructor(...args) {
        super(...args)
        this.health = 5
        this.attack = 2
    }

    createHero() {
        this.createPersonage()
        this.drawHero()
    }

    moveHero(diffX, diffY) {
        var arr = this.map.array[this.y][this.x].classList
        if (arr.contains('tileW') || arr.contains('tileE')) {
            this.x += diffX
            this.y += diffY
            return
        }
        this.movePersonage(diffX, diffY, 'tileP')
        this.drawHero()
        this.checkArtifact()
    }

    async actionsHero() {
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
        //movement
        if (e.key == 'd') {
            this.x += 1
            if (this.x >= this.map.sizes.width) this.x -= 1
            this.moveHero(-1, 0)
        } else if (e.key == 'w') {
            this.y -= 1
            if (this.y < 0) this.y += 1
            this.moveHero(0, 1)
        } else if (e.key == 'a') {
            this.x -= 1
            if (this.x < 0) this.x += 1
            this.moveHero(1, 0)
        } else if (e.key == 's') {
            this.y += 1
            if (this.y >= this.map.sizes.height) this.y -= 1
            this.moveHero(0, -1)
        }
        //attack
        else if (e.keyCode == 32) {
            e.preventDefault()
            this.attackHero()
        }
    }

    checkKey(key) {}

    drawHero() {
        this.map.array[this.y][this.x].classList.add('tileP')
    }

    setAttack() {
        this.attack += 1
    }

    setHealth() {
        this.health = 5
    }

    attackHero(enemy) {
        enemy.reducedHealth(this.attack)
        if (enemy.health == 0) {
            enemy.killPersonage('tileE')
        }
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

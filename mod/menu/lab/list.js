function init() {
    this.items = []
    this.stack = []
    this.selected = -1
    this.color = '#ffffff'
    this.selectedColor = '#ffff00'
}

function setItems(items) {
    this.items = items
    this.selected = 0

    this.items.forEach(item => {
        if (item.sync) item.sync()
    })
}

function enter(items) {
    this.stack.push({
        items: this.items,
        selected: this.selected,
    })
    this.setItems(items)
}

function back() {
    if (this.stack.length === 0) return
    const { items, selected } = this.stack.pop()
    this.items = items
    this.selected = selected
}

function draw() {
    let x = rx(.5)
    let y = ry(.4)

    alignCenter()
    baseMiddle()

    font('48px moon')

    for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i]

        if (i === this.selected) fill(this.selectedColor)
        else fill(this.color)

        if (i === this.selected) text('= ' + item.name + ' =', x
            , y)
        else text(item.name, x, y)

        y += textHeight()
    }
}

function left() {
    const item = this.items[this.selected]
    if (!item) return

    if (item.left) item.left(this)
}

function right() {
    const item = this.items[this.selected]
    if (!item) return

    if (item.right) item.right(this)
}

function up() {
    this.selected --
    if (this.selected < 0) this.selected = this.items.length - 1
}

function down() {
    this.selected ++
    if (this.selected >= this.items.length) this.selected = 0
}

function activate() {
    const item = this.items[this.selected]
    if (!item) return
    log(' => ' + item.name)
    if (item.action) item.action(this)
}


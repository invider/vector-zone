function init() {
    this.items = [
        {
            name: 'new game',
            action: () => _.trap('hide'),
        },
        {
            name: 'options',
        },
        {
            name: 'instructions',
        },
        {
            name: 'credits',
        },
        {
            name: 'continue',
            action: () => _.trap('hide'),
        },
    ]
    this.selected = 0
    this.color = '#ffffff'
    this.selectedColor = '#ffff00'
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

        if (i === this.selected) text('> ' + item.name + ' <', x, y)
        else text(item.name, x, y)

        y += textHeight()
    }
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
    if (item.action) item.action()
}


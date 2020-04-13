const main = [
    {
        name: 'new game',
        action: () => _.trap('hide'),
    },
    {
        name: '',
        opt: [ 'easy', 'medium', 'hard' ],
        selected: 0,

        sync: function() {
            this.name = 'difficulty: ' + this.opt[this.selected]
        },

        left: function() {
            this.selected --
            if (this.selected < 0) this.selected = this.opt.length - 1
            this.sync()
        },
        right: function() {
            this.selected ++
            if (this.selected >= this.opt.length) this.selected = 0
            this.sync()
        },
    },
    {
        name: 'options',
        action: (menu) => {
            menu.enter(env.options)
        }
    },
    {
        name: 'credits',
    },
    {
        name: 'continue',
        action: () => _.trap('hide'),
    },
]

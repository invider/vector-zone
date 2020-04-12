const bind = {
}

function evo(dt) {
    pad().forEach(p => {
        if (!bind[p.index]) {
            // found a free one! assign!
            let ship
            lab._ls.forEach(e => {
                if (!bind[p.index] && e.type === 'ship' && !e.pad) {
                    e.pad = p
                    bind[p.index] = e
                    log('bound ' + e.name + ' -> #' + p.index + ':' + p.id)
                }
            })
        }
    })
}

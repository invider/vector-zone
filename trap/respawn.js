const BR = 100

function respawn(st) {
    augment(st, {
        x: BR + RND(width() - BR*2),
        y: BR + RND(height() - BR*2),
    })
    lab.spawn('ship', st)
}

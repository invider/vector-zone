const BR = 100

function respawn(st) {
    augment(st, {
        x: BR + RND(ctx.width - BR*2),
        y: BR + RND(ctx.height - BR*2),
    })
    lab.spawn('ship', st)
}

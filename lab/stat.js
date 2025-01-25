
function draw() {
    font(env.style.font.stat.head)
    baseTop()

    alignLeft()
    fill(hsl(.7, .7, .6))
    text('' + env.score[0], 20, 20)

    alignRight()
    fill(hsl(.1, .7, .6))
    text('' + env.score[1], ctx.width - 20, 20)
}


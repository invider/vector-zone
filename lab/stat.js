
function draw() {
    font('32px zekton')
    baseTop()

    alignLeft()
    fill(hsl(.7, .7, .6))
    text('' + env.score[0], 20, 20)

    alignRight()
    fill(hsl(.1, .7, .6))
    text('' + env.score[1], width() - 20, 20)
}

